import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2ExerciseVideoUploadComponent } from './step2-exercise-video-upload.component';

describe('Step2ExerciseVideoUploadComponent', () => {
  let component: Step2ExerciseVideoUploadComponent;
  let fixture: ComponentFixture<Step2ExerciseVideoUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step2ExerciseVideoUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2ExerciseVideoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
