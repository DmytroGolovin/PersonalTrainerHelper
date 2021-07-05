import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2PlanScheduleComponent } from './step2-plan-schedule.component';

describe('Step2PlanScheduleComponent', () => {
  let component: Step2PlanScheduleComponent;
  let fixture: ComponentFixture<Step2PlanScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step2PlanScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2PlanScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
