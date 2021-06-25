import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1ExerciseGeneralDataComponent } from './step1-exercise-general-data.component';

describe('Step1ExerciseGeneralDataComponent', () => {
  let component: Step1ExerciseGeneralDataComponent;
  let fixture: ComponentFixture<Step1ExerciseGeneralDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step1ExerciseGeneralDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1ExerciseGeneralDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
