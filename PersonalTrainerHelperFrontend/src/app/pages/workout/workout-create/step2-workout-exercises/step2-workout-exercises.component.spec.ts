import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2WorkoutExercisesComponent } from './step2-workout-exercises.component';

describe('Step2WorkoutExercisesComponent', () => {
  let component: Step2WorkoutExercisesComponent;
  let fixture: ComponentFixture<Step2WorkoutExercisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step2WorkoutExercisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2WorkoutExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
