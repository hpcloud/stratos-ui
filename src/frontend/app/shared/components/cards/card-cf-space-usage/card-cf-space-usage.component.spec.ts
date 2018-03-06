import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudFoundrySpaceService } from '../../../../features/cloud-foundry/services/cloud-foundry-space.service';
import {
  getBaseTestModulesNoShared,
  getMetadataCardComponents,
} from '../../../../test-framework/cloud-foundry-endpoint-service.helper';
import { CloudFoundrySpaceServiceMock } from '../../../../test-framework/cloud-foundry-space.service.mock';
import { CardCfSpaceUsageComponent } from './card-cf-space-usage.component';

describe('CardCfSpaceUsageComponent', () => {
  let component: CardCfSpaceUsageComponent;
  let fixture: ComponentFixture<CardCfSpaceUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardCfSpaceUsageComponent, getMetadataCardComponents],
      imports: [...getBaseTestModulesNoShared],
      providers: [
        { provide: CloudFoundrySpaceService, useClass: CloudFoundrySpaceServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCfSpaceUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});