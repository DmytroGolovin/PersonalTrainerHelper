import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3ExerciseSummaryComponent } from './step3-exercise-summary.component';

describe('Step3ExerciseSummaryComponent', () => {
  let component: Step3ExerciseSummaryComponent;
  let fixture: ComponentFixture<Step3ExerciseSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step3ExerciseSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step3ExerciseSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
