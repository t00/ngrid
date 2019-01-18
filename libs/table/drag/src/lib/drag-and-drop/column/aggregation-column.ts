// tslint:disable:no-output-rename

import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  OnDestroy,
  Optional,
} from '@angular/core';

import { Directionality } from '@angular/cdk/bidi';
import {
  CdkDropListContainer,
  DragDropRegistry,
  CDK_DROP_LIST,
  DragRef, DropListRef
} from '@angular/cdk/drag-drop';

import { NegTableComponent, NegTablePluginController, NegColumn } from '@neg/table';
import { CdkLazyDropList } from '../lazy-drag-drop';
import { NegTableColumnDragDirective } from './column-reorder-plugin';

let _uniqueIdCounter = 0;

@Directive({
  selector: '[negAggregationContainer]',
  exportAs: 'negAggregationContainer',
  host: { // tslint:disable-line:use-host-property-decorator
    'class': 'cdk-drop-list',
    '[id]': 'id',
  },
  providers: [
    { provide: CDK_DROP_LIST, useExisting: NegTableAggregationContainerDirective },
  ],
})
export class NegTableAggregationContainerDirective<T = any> extends CdkLazyDropList<T> implements OnDestroy {
  id = `neg-table-column-aggregation-container-${_uniqueIdCounter++}`;
  orientation: 'horizontal' | 'vertical' = 'horizontal';

  pending: NegColumn;

  constructor(public table: NegTableComponent<T>,
              pluginCtrl: NegTablePluginController,
              element: ElementRef<HTMLElement>,
              dragDropRegistry: DragDropRegistry<DragRef, DropListRef<T>>,
              changeDetectorRef: ChangeDetectorRef,
              @Optional() private dir?: Directionality) {
    super(element, dragDropRegistry as any, changeDetectorRef, dir);
    const reorder = pluginCtrl.getPlugin('columnReorder');
    reorder.connectedTo = this.id;
  }

  drop(item: NegTableColumnDragDirective<T>, currentIndex: number, previousContainer: Partial<CdkDropListContainer>, isPointerOverContainer: boolean): void {
    this.pending = undefined;
    this.table.columnApi.addGroupBy(item.column);
    super.drop(item, currentIndex, previousContainer, isPointerOverContainer);
  }

  /**
   * Emits an event to indicate that the user moved an item into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   */
  enter(item: NegTableColumnDragDirective<T>, pointerX: number, pointerY: number): void {
    this.pending = item.column;
    super.enter(item, pointerX, pointerY);
    item.getPlaceholderElement().style.display = 'none';
    for (const c of item.getCells()) {
      c.style.display = 'none';
    }
  }

  exit(item: NegTableColumnDragDirective<T>): void {
    this.pending = undefined;
    super.exit(item);
    item.getPlaceholderElement().style.display = '';
    for (const c of item.getCells()) {
      c.style.display = '';
    }
  }
}
