import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1WorkoutGeneralDataComponent } from './step1-workout-general-data.component';

describe('Step1WorkoutGeneralDataComponent', () => {
  let component: Step1WorkoutGeneralDataComponent;
  let fixture: ComponentFixture<Step1WorkoutGeneralDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step1WorkoutGeneralDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1WorkoutGeneralDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
