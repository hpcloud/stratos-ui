import { CoreModule } from '../../../../core/core.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { EntityInfo } from '../../../../store/types/api.types';
import { TableCellComponent } from '../../table/table-cell/table-cell.component';
import { EventTabActorIconPipe } from '../../table/custom-cells/table-cell-event-action/event-tab-actor-icon.pipe';
import { ValuesPipe } from '../../../pipes/values.pipe';
import { getInitialTestStoreState } from '../../../../test-framework/store-test-helper';
import { StoreModule } from '@ngrx/store';
import { appReducers } from '../../../../store/reducers.module';
import { TableCellEntryPoints, CardEntryPoints } from '../../../../test-framework/list-table-helper';

describe('CardComponent', () => {
  let component: CardComponent<EntityInfo>;
  let fixture: ComponentFixture<CardComponent<EntityInfo>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardComponent,
        ...CardEntryPoints,
        TableCellComponent,
        ...TableCellEntryPoints,
        EventTabActorIconPipe,
        ValuesPipe,
      ],
      imports: [
        CoreModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
