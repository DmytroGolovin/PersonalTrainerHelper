import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutExercicesModalComponent } from './workout-exercices-modal.component';

describe('WorkoutExercicesModalComponent', () => {
  let component: WorkoutExercicesModalComponent;
  let fixture: ComponentFixture<WorkoutExercicesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutExercicesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutExercicesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
