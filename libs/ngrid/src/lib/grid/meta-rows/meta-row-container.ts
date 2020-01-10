import { Subject } from 'rxjs';
import { Component, Input, ElementRef, OnDestroy } from '@angular/core';
import { UnRx } from '@pebula/utils';

import { PblNgridMetaRowService } from './meta-row.service';

@Component({
  selector: 'div[pbl-ngrid-fixed-meta-row-container]',
  template: `<div class="pbl-cdk-table" [style.width.px]="_width"></div><div class="pbl-cdk-table" [style.width.px]="_width$ | async"></div>`,
  host: { // tslint:disable-line:use-host-property-decorator
    style: 'flex: 0 0 auto; overflow: hidden;',
    '[style.width.px]': '_innerWidth',
  },
})
@UnRx()
export class PblNgridMetaRowContainerComponent implements OnDestroy {

  @Input('pbl-ngrid-fixed-meta-row-container') set type(value: 'header' | 'footer') {
    if (this._type !== value) {
      this.init(value);
    }
  };

  /**
   * The inner width of the grid, the viewport width of a row.
   * The width of the grid minus scroll bar.
   */
  _innerWidth: number;
  _minWidth: number;
  _width: number;
  readonly _width$ = new Subject<number>();

  private _totalColumnWidth: number = 0;
  private _type: 'header' | 'footer';
  private element: HTMLElement;

  constructor(public readonly metaRows: PblNgridMetaRowService, elRef: ElementRef<HTMLElement>) {
    this.element = elRef.nativeElement;
    metaRows.sync.pipe(UnRx(this)).subscribe( () => this.syncRowDefinitions() );
    this.metaRows.extApi.events
      .pipe(UnRx(this))
      .subscribe( event => {
        if (event.kind === 'onResizeRow') {
          this.updateWidths();
        }
      });
    this.metaRows.extApi.grid.columnApi.totalColumnWidthChange
      .pipe(UnRx(this))
      .subscribe( width => {
        this._totalColumnWidth = width;
        this.updateWidths();
      });
  }

  ngOnDestroy(): void {
    this._width$.complete();
  }

  private updateWidths(): void {
    this._innerWidth = this.metaRows.extApi.grid.viewport.innerWidth;
    this._minWidth = this.metaRows.extApi.cdkTable.minWidth;
    this._width = Math.max(this._innerWidth, this._minWidth);
    this._width$.next(Math.max(this._innerWidth, this._totalColumnWidth))
  }
  private init(type: 'header' | 'footer'): void {

    if (type === 'header') {
      this._type = type;
    } else {
      this._type = 'footer';
    }

    const scrollContainerElement = this.element;
    scrollContainerElement.scrollLeft = this.metaRows.extApi.grid.viewport.measureScrollOffset('start');

    this.metaRows.hzScroll
      .pipe(UnRx(this))
      .subscribe( offset => scrollContainerElement.scrollLeft = offset );

    this.metaRows.extApi.cdkTable.onRenderRows
      .pipe(UnRx(this))
      .subscribe( () => { this.updateWidths() });
  }

  private syncRowDefinitions(): void {
    const isHeader = this._type === 'header';
    const section = isHeader ? this.metaRows.header : this.metaRows.footer;

    const widthContainer = this.element.firstElementChild;
    const container = widthContainer.nextElementSibling;

    if (isHeader) {
      widthContainer.appendChild(this.metaRows.gridWidthRow.el);
    }

    for (const def of section.fixed) {
      container.appendChild(def.el);
    }
  }
}
