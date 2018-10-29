/* @neg-example:ex-1 */
/* @neg-example:ex-2 */
/* @neg-example:ex-3 */
import { map } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { createDS, columnFactory } from '@neg/table';
import { NegTableCellEvent } from '@neg/table/target-events';

import { Person, DemoDataSource } from '@neg/demo-apps/shared';

const COLUMNS = columnFactory()
  .default({minWidth: 100})
  .table(
    { prop: 'id', sort: true, width: '40px' },
    { prop: 'name', sort: true },
    { prop: 'gender', width: '50px' },
    { prop: 'birthdate', type: 'date' },
    { prop: 'bio' },

  )
  .build();

@Component({
  selector: 'neg-cell-tooltip-table-example-component',
  templateUrl: './cell-tooltip.component.html',
  styleUrls: ['./cell-tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CellTooltipTableExampleComponent {


  columns = COLUMNS;

  ds1 = createDS<Person>().onTrigger( () => this.datasource.getPeople(0, 15) ).create();

  ds2 = createDS<Person>().onTrigger( () => this.datasource.getPeople(0, 15) ).create();

  constructor(private datasource: DemoDataSource) { }

  getTooltipMessage(event: NegTableCellEvent<Person>): string {
    return `${event.colIndex} / ${event.rowIndex} -> ${event.rowIndex % 2 ? 'ODD' : 'EVEN'} ROW\n\n${event.cellTarget.innerText}`;
  }
}
/* @neg-example:ex-3 */
/* @neg-example:ex-2 */
/* @neg-example:ex-1 */
