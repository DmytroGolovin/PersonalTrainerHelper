import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3PlanSummaryComponent } from './step3-plan-summary.component';

describe('Step3PlanSummaryComponent', () => {
  let component: Step3PlanSummaryComponent;
  let fixture: ComponentFixture<Step3PlanSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step3PlanSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step3PlanSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
