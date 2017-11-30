import { NoContentMessageComponent } from '../no-content-message/no-content-message.component';
import { CoreModule } from '../../../core/core.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointsMissingComponent } from './endpoints-missing.component';
import { RouterTestingModule } from '@angular/router/testing';
import { createBasicStoreModule } from '../../../test-framework/store-test-helper';

describe('EndpointsMissingComponent', () => {
  let component: EndpointsMissingComponent;
  let fixture: ComponentFixture<EndpointsMissingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EndpointsMissingComponent,
        NoContentMessageComponent,
      ],
      imports: [
        CoreModule,
        createBasicStoreModule(),
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointsMissingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
