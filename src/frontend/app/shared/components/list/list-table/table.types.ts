import { DataFunction, DataFunctionDefinition } from '../data-sources-controllers/list-data-source';
import { TableCellStatusDirective } from './table-cell-status.directive';
import { listTableCells, TableCellComponent } from './table-cell/table-cell.component';
import { TableRowComponent } from './table-row/table-row.component';
import { TableComponent } from './table.component';
import { TableCellDefaultComponent } from './app-table-cell-default/app-table-cell-default.component';

export interface ICellDefinition<T> {
  // Dot separated path to get the value from the row
  valuePath?: string;
  // Takes president over valuePath
  getValue?: (row: T) => string;
  // Should the value of getLink be used in a href or routerLink
  externalLink?: boolean;
  // Automatically turns the row into a link
  getLink?: (row: T) => string;
}
export interface ITableColumn<T> {
  columnId: string;
  cellComponent?: any;
  cellDefinition?: ICellDefinition<T>; // This takes president over cellComponent
  cellConfig?: any;   // Config for a custom cell component
  headerCell?: () => string; // Either headerCell OR headerCellComponent should be defined
  headerCellComponent?: any;
  class?: string;
  sort?: boolean | DataFunctionDefinition | DataFunction<T>;
  cellFlex?: string;
}

export interface ITableText {
  title: string;
  filter?: string;
}

export const listTableComponents = [
  TableComponent,
  TableCellComponent,
  TableRowComponent,
  TableCellDefaultComponent,
  ...listTableCells,
  TableCellStatusDirective,
];