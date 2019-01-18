  // tslint:disable:no-output-rename

import { BehaviorSubject } from 'rxjs';

import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  Input,
  Output,
  OnDestroy,
  Optional,
  OnInit,
} from '@angular/core';

import { Directionality } from '@angular/cdk/bidi';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  CdkDropListContainer,
  DragDropRegistry,
  CdkDrag,
  CdkDragDrop,
  CDK_DROP_LIST,
  DragRef, DropListRef, __$Overwrite
} from '@angular/cdk/drag-drop';

import { NegTableComponent, TablePlugin, NegColumn, NegTablePluginController, NegTableCellContext } from '@neg/table';
import { CdkLazyDropList, CdkLazyDrag } from '../lazy-drag-drop';

import './extend-table';
declare module '@neg/table/lib/ext/types' {
  interface NegTablePluginExtension {
    columnReorder?: NegTableColumnReorderPluginDirective;
  }
}

const PLUGIN_KEY: 'columnReorder' = 'columnReorder';

let _uniqueIdCounter = 0;

@TablePlugin({ id: PLUGIN_KEY })
@Directive({
  selector: 'neg-table[columnReorder]',
  exportAs: 'negTableColumnReorder',
  host: { // tslint:disable-line:use-host-property-decorator
    'class': 'cdk-drop-list',
    '[id]': 'id',
    '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
    '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()',
  },
  providers: [
    { provide: CDK_DROP_LIST, useExisting: NegTableColumnReorderPluginDirective },
  ],
})
export class NegTableColumnReorderPluginDirective<T = any> extends CdkLazyDropList<T, NegTableColumnReorderPluginDirective<T>> implements OnInit, OnDestroy {
  id = `neg-table-column-reorder-list-${_uniqueIdCounter++}`;
  orientation: 'horizontal' | 'vertical' = 'horizontal';

  @Input() get columnReorder(): boolean { return this._columnReorder; };
  set columnReorder(value: boolean) {
    value = coerceBooleanProperty(value);
    this._columnReorder = value;
  }

  /**
   * When true, will not move the column on drop.
   * Instead you need to handle the dropped event.
   */
  @Input() get manualOverride(): boolean { return this._manualOverride; };
  set manualOverride(value: boolean) { this._manualOverride = coerceBooleanProperty(value); }

  @Output('cdkDropDragging') dragging: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private _columnReorder = false;
  private _manualOverride = false;
  private _removePlugin: (table: NegTableComponent<any>) => void;
  private lastSwap: DragRef<NegTableColumnDragDirective<T>>;
  private lastExit: { position: number, item: { drag: DragRef<NegTableColumnDragDirective<T>>; offset: number; clientRect: ClientRect; } };

  // Stuff to workaround encapsulation in CdkDropList
  private get negGetItemIndexFromPointerPosition(): (item: DragRef<NegTableColumnDragDirective<T>>, pointerX: number, pointerY: number, delta?: {x: number, y: number}) => number {
    return (this._dropListRef as any)._getItemIndexFromPointerPosition.bind(this._dropListRef);
  }
  private get negGetPositionCacheItems(): { drag: DragRef<NegTableColumnDragDirective<T>>; offset: number; clientRect: ClientRect; }[] {
    // TODO: Remove on next minor update >=7.2.1
    return (this._dropListRef as any)._positionCache.items;
    // return (this._dropListRef as any)._itemPositions;
  }

  constructor(public table: NegTableComponent<T>,
              pluginCtrl: NegTablePluginController,
              element: ElementRef<HTMLElement>,
              dragDropRegistry: DragDropRegistry<DragRef, DropListRef>,
              changeDetectorRef: ChangeDetectorRef,
              @Optional() private dir?: Directionality) {
    super(element, dragDropRegistry as any, changeDetectorRef, dir);
    this._removePlugin = pluginCtrl.setPlugin(PLUGIN_KEY, this);

    this.directContainerElement = '.neg-table-header-row-main';
    this.dropped.subscribe( (event: CdkDragDrop<T, any>) => {
      if (!this.manualOverride) {
        this.table.columnApi.moveColumn((event.item as NegTableColumnDragDirective<T>).column, event.currentIndex);
      }
    });

    this.dragging.subscribe( isDragging => {
      const el = element.nativeElement;
      if (isDragging) {
        el.classList.add('neg-table-column-list-dragging');
      } else {
        el.classList.remove('neg-table-column-list-dragging');
      }
      this.lastSwap = undefined;
    });

    this.monkeyPatchDropListRef();
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.dropped.subscribe( e => {
      this._negReset();
    });

    this.exited.subscribe( e => {
      const position = this.negGetPositionCacheItems.findIndex( currentItem => currentItem.drag === e.item.negDragRef );
      this.lastExit = { position, item: this.negGetPositionCacheItems[position] };
      this._negReset();
    });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this._removePlugin(this.table);
  }

  protected beforeStarted(): void {
    super.beforeStarted();
    this.lastExit = undefined;
    this.dragging.next(true);
  }

  private _negReset(): void {
    this.dragging.next(false);
    const siblings = this.negGetPositionCacheItems;
    siblings.forEach((sibling, index) => {
      for (const c of sibling.drag.data.getCells()) {
        c.style.transform = ``;
      }
    });
  }

  private monkeyPatchDropListRef(): void {
    const { _sortItem, enter } = this._dropListRef;

    this.negDropListRef.enter = (item: Parameters<typeof enter>[0], pointerX: number, pointerY: number): void => {
      if (this.lastExit) {
        const lastExit = this.lastExit;
        this.lastExit = undefined;
        if (lastExit.item.drag === item) {
          const isHorizontal = this.orientation === 'horizontal';
          pointerX = lastExit.item.clientRect.left + 1 - (isHorizontal ? lastExit.item.offset : 0);
          pointerY = lastExit.item.clientRect.top + 1 - (!isHorizontal ? lastExit.item.offset : 0);
        }
      }
      enter.call(item, item, pointerX, pointerY);
    };

    this.negDropListRef._sortItem = (item: Parameters<typeof enter>[0], pointerX: number, pointerY: number, pointerDelta: {x: number, y: number}): void => {
      const siblings = this.negGetPositionCacheItems;
      const newIndex = this.negGetItemIndexFromPointerPosition(item as DragRef<NegTableColumnDragDirective<T>>, pointerX, pointerY, pointerDelta);
      if (newIndex === -1 && siblings.length > 0) {
        return;
      }

      const oldOrder = siblings.slice();
      const isHorizontal = this.orientation === 'horizontal';
      const siblingAtNewPosition = siblings[newIndex];

      if (siblingAtNewPosition.drag.data.column.wontBudge) {
        return;
      }

      // we now need to find if between current and new position there are items with `wontBudge`
      const itemAtOriginalPosition = this.lastSwap ? this.lastSwap : item;
      const currentIndex = siblings.findIndex( currentItem => currentItem.drag === itemAtOriginalPosition );
      const start = Math.min(newIndex, currentIndex)
      const itemsDraggedOver = siblings.slice(start, Math.abs(newIndex - currentIndex) + start);
      for (const dragItem of itemsDraggedOver) {
        if (dragItem.drag.data.column.wontBudge && dragItem.drag !== item) {
          return;
        }
      }

      // check if we move the item outside of locked group OR into a locked group... both are invalid.
      if (!item.data.column.checkGroupLockConstraint(siblingAtNewPosition.drag.data.column)) {
        return;
      }

      _sortItem.call(this._dropListRef, item, pointerX, pointerY, pointerDelta);

      this.lastSwap = siblingAtNewPosition.drag;

      if (isHorizontal) {
        siblings.forEach((sibling, index) => {
          // Don't do anything if the position hasn't changed.
          if (oldOrder[index] === sibling) {
            return;
          }

          for (const c of sibling.drag.data.getCells()) {
            c.style.transform = `translate3d(${sibling.offset}px, 0, 0)`;
          }
        });
      }
    };
  }
}

@Directive({
  selector: '[negTableColumnDrag]',
  exportAs: 'negTableColumnDrag',
  host: { // tslint:disable-line:use-host-property-decorator
    'class': 'cdk-drag',
    '[class.cdk-drag-dragging]': '_dragRef.isDragging()',
  },
  providers: [
    { provide: CdkDrag, useExisting: NegTableColumnDragDirective }
  ]
})
export class NegTableColumnDragDirective<T = any> extends CdkLazyDrag<T, NegTableColumnReorderPluginDirective<T>, NegTableColumnDragDirective<T>> implements AfterViewInit {
  rootElementSelector = 'neg-table-header-cell';

  column: NegColumn;

  @Input('negTableColumnDrag') set context(value: Pick<NegTableCellContext<T>, 'col' | 'table'> & Partial<Pick<NegTableCellContext<T>, 'row' | 'value'>>) {
    this._context = value;
    this.column = value && value.col;
    const pluginCtrl = this.pluginCtrl = value && NegTablePluginController.find(value.table);
    const plugin = pluginCtrl && pluginCtrl.getPlugin(PLUGIN_KEY);
    this.cdkDropList = plugin || undefined;
  }

  private _context: Pick<NegTableCellContext<T>, 'col' | 'table'> & Partial<Pick<NegTableCellContext<T>, 'row' | 'value'>>
  private pluginCtrl: NegTablePluginController;
  private cache: HTMLElement[];

  ngAfterViewInit(): void {
    // super.ngAfterViewInit will register the _pointerDown so we can change now, it safe.
    this.monkeyPatchDragRef();

    super.ngAfterViewInit();

    this.started.subscribe( () => this._context.col.columnDef.isDragging = true );
    this.ended.subscribe( () => this._context.col.columnDef.isDragging = false );
  }

  getCells(): HTMLElement[] {
    if (!this.cache) {
      this.cache = this._context.col.columnDef.queryCellElements('table');
    }
    return this.cache;
  }

  reset(): void {
    super.reset();
    if (this.cache) {
      for (const el of this.cache) {
        el.style.transform = ``;
      }
      this.cache = undefined;
    }
  }

  private monkeyPatchDragRef(): void {
    const dragRef: any = this._dragRef;
    const _pointerDown = dragRef._pointerDown;
    dragRef._pointerDown = (event: MouseEvent | TouchEvent) => {
      const { cdkDropList } = this;
      if (cdkDropList && cdkDropList.columnReorder && this._context.col.reorder) {
        // we don't allow a new dragging session before the previous ends.
        // this sound impossible, but due to animation transitions its actually is.
        // if the `transitionend` is long enough, a new drag can start...
        if (!cdkDropList._dropListRef.isDragging()) {
          _pointerDown.call(this._dragRef, event);
        }
      }
    }
  }
}