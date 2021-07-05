import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3WorkoutSummaryComponent } from './step3-workout-summary.component';

describe('Step3WorkoutSummaryComponent', () => {
  let component: Step3WorkoutSummaryComponent;
  let fixture: ComponentFixture<Step3WorkoutSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step3WorkoutSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step3WorkoutSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
