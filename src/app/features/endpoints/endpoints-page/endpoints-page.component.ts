import { EndpointsService } from '../../../core/endpoints.service';
import { timeout } from 'rxjs/operator/timeout';
import { TableCellActionsComponent } from '../../../shared/components/table/table-cell-actions/table-cell-actions.component';
import { CNSISModel, CNSISState } from '../../../store/types/cnsis.types';
import { AuthState } from '../../../store/reducers/auth.reducer';
import { Observable, Subscription } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';
import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { TableHeaderSelectComponent } from '../../../shared/components/table/table-header-select/table-header-select.component';
import { TableCellSelectComponent } from '../../../shared/components/table/table-cell-select/table-cell-select.component';
import { TableCellEditComponent } from '../../../shared/components/table/table-cell-edit/table-cell-edit.component';
import { EndpointsDataSource } from '../../../shared/data-sources/endpoints-data-source';
import { CardEndpointComponent } from '../../../shared/components/cards/custom-cards/card-endpoint/card-endpoint.component';
import {
  TableCellEndpointStatusComponent
} from '../../../shared/components/table/custom-cells/table-cell-endpoint-status/table-cell-endpoint-status.component';
import { ITableColumn } from '../../../shared/components/table/table.types';

function getEndpointTypeString(endpoint: CNSISModel): string {
  return endpoint.cnsi_type === 'cf' ? 'Cloud Foundry' : endpoint.cnsi_type;
}

@Component({
  selector: 'app-endpoints-page',
  templateUrl: './endpoints-page.component.html',
  styleUrls: ['./endpoints-page.component.scss'],
})
export class EndpointsPageComponent implements OnInit {

  dataSource: EndpointsDataSource;

  columns: ITableColumn<CNSISModel>[] = [
    {
      columnId: 'select',
      headerCellComponent: TableHeaderSelectComponent,
      cellComponent: TableCellSelectComponent,
      class: 'table-column-select', cellFlex: '1'
    },
    {
      columnId: 'name',
      headerCell: () => 'Name',
      cell: row => row.name,
      sort: true,
      cellFlex: '2'
    },
    {
      columnId: 'connection',
      headerCell: () => 'Status',
      cellComponent: TableCellEndpointStatusComponent,
      sort: true,
      cellFlex: '1'
    },
    {
      columnId: 'type',
      headerCell: () => 'Type',
      cell: getEndpointTypeString,
      sort: true,
      cellFlex: '2'
    },
    {
      columnId: 'address',
      headerCell: () => 'Address',
      cell: row => `${row.api_endpoint.Scheme}://${row.api_endpoint.Host}`,
      sort: true,
      cellFlex: '5'
    },
    {
      columnId: 'edit',
      headerCell: () => 'Actions',
      cellComponent: TableCellActionsComponent,
      class: 'table-column-edit',
      cellFlex: '1'
    },
  ];
  cardComponent = CardEndpointComponent;

  constructor(private store: Store<AppState>, public endpointsService: EndpointsService) { }

  ngOnInit() {
    this.dataSource = new EndpointsDataSource(this.store);
  }

}
