import { Observable, isObservable } from 'rxjs';
import { Directive, EmbeddedViewRef, Input, OnDestroy } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { NegTableComponent, KillOnDestroy, NegTablePluginController, TablePlugin } from '@neg/table';

declare module '@neg/table/lib/ext/types' {
  interface NegTablePluginExtension {
    blockUi?: { blockUi: boolean | 'auto' | Observable<boolean> };
  }
}

const PLUGIN_KEY: 'blockUi' = 'blockUi';

@TablePlugin({ id: PLUGIN_KEY })
@Directive({ selector: 'neg-table[blockUi]', exportAs: 'blockUi' })
@KillOnDestroy()
export class NegTableBlockUiPluginDirective<T> implements OnDestroy {

  /**
   * Blocks the UI with the template defined via `NegTableBlockUiDefDirective`.
   * If a template does not exist blocking is ignored.
   *
   * There are 3 operation modes, the modes are set based on the input value:
   *   - Auto mode (INPUT: 'auto')
   *     The UI will be blocked automatically based on datasource changes.
   *
   *    - Manual mode (INPUT: boolean)
   *     The UI will be block is toggled based on the value, i.e. `true` will block and false will unblock.
   *
   *   - Notification mode (INPUT: Observable<boolean>)
   *     Similar to Manual mode but controlled by a stream boolean value.
   *
   * **Note about Notification mode**
   * Notification mode accepts an observable, at the point where the value is set the block state does not change (if it was "on" it will stay "on" and vice versa)
   * It will only change on the first emission, this is important to understand.
   *
   * For example, if the current block state is off and we pass a `Subject`, the state remains off until the next emission
   * of the `Subject` is `true`. If it already emitted `true` before the assignment it will not be taken into account. This is why
   * using `BehaviouralSubject` is preferred.
   *
   * Also note that when sending an observable it is treated as "notifier", do not send cold observable as they get subscribed to.
   * For example, sending the returned value from `HttpClient` will probably result in 2 HTTP calls, if you already subscribed to it
   * > The default value is `auto` which means that `<neg-table blockUi>` is similar to `<neg-table blockUi="auto">`
   */
  @Input() get blockUi(): boolean | 'auto' | Observable<boolean> { return this._blockUi; }
  set blockUi(value: boolean | 'auto' | Observable<boolean>) {
    let coerced: boolean | 'auto' = coerceBooleanProperty(value);
    if (coerced && (value === 'auto' || (value as any) === '')) {
      coerced = 'auto';
    }

    if (isObservable(value) && this._blockUi !== value) {
      if (isObservable(this._blockUi)) {
        KillOnDestroy.kill(this, this._blockUi);
      }
      this._blockUi = value;
      value.pipe(KillOnDestroy(this, this._blockUi)).subscribe( state => {
        this._blockInProgress = state;
        this.setupBlocker();
      });
    } else if (this._blockUi !== coerced) {
      this._blockUi = coerced;
      if (coerced !== 'auto') {
        this._blockInProgress = coerced;
        this.setupBlocker();
      }
    }
  }

  private _blockInProgress: boolean = false;
  private _blockUi: boolean | 'auto' | Observable<boolean>;
  private _blockerEmbeddedVRef: EmbeddedViewRef<any>;
  private _removePlugin: (table: NegTableComponent<any>) => void;

  constructor(private table: NegTableComponent<any>, pluginCtrl: NegTablePluginController<T>) {
    this._removePlugin = pluginCtrl.setPlugin(PLUGIN_KEY, this);

    table.registry.changes.subscribe( changes => {
      for (const c of changes) {
        switch (c.type) {
          case 'blocker':
            this.setupBlocker();
            break;
        }
      }
    });

    pluginCtrl.events
      .subscribe( event => {
        if (event.kind === 'onDataSource') {
          const { prev, curr } = event;
          if (prev) {
            KillOnDestroy.kill(this, prev);
          }
          curr.onSourceChanging
            .pipe(KillOnDestroy(this, curr))
            .subscribe( () => {
              if (this._blockUi === 'auto') {
                this._blockInProgress = true;
                this.setupBlocker();
              }
            });
          curr.onSourceChanged
            .pipe(KillOnDestroy(this, curr))
            .subscribe( () => {
              if (this._blockUi === 'auto') {
                this._blockInProgress = false;
                this.setupBlocker();
              }
            });
        }
      });
  }


  ngOnDestroy(): void {
    this._removePlugin(this.table);
  }

  private setupBlocker(): void {
    const state = this._blockInProgress;
    if (state) {
      if (!this._blockerEmbeddedVRef) {
        const blockerTemplate = this.table.registry.getSingle('blocker');
        if (blockerTemplate) {
          this._blockerEmbeddedVRef = this.table.createView('after', blockerTemplate.tRef, { $implicit: this.table });
          this._blockerEmbeddedVRef.detectChanges();
        }
      }
    } else if (this._blockerEmbeddedVRef) {
      this.table.removeView(this._blockerEmbeddedVRef, 'after');
      this._blockerEmbeddedVRef = undefined;
    }
  }
}
