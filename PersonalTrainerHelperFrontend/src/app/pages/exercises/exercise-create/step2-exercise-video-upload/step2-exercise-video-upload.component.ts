import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from 'src/app/shared/models/entities/exercise.model';

@Component({
  selector: 'app-step2-exercise-video-upload',
  templateUrl: './step2-exercise-video-upload.component.html',
  styleUrls: ['./step2-exercise-video-upload.component.scss']
})
export class Step2ExerciseVideoUploadComponent implements OnInit {
  @Input() public exercise: Exercise;
  @Output() nextStepEmitter: EventEmitter<any> = new EventEmitter();
  @Output() previousStepEmitter: EventEmitter<any> = new EventEmitter();

  @ViewChild('videoForm', { static: false }) goalsForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  public nextStep(){
    if(this.goalsForm.valid){
      this.nextStepEmitter.emit();
    }
  }

  public previousStep(){
    this.previousStepEmitter.emit();
  }

  onSelectFile(event) {
    const file = event && event[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      this.exercise.videoFile = file;
      // if(file.type.indexOf('image')> -1){
      //   this.format = 'image';
      // } else if(file.type.indexOf('video')> -1){
      //   this.format = 'video';
      // }
      reader.onload = (event) => {
        this.exercise.videoSource = (<FileReader>event.target).result;
      }
    }
  }

  removeAttachment() {
    this.exercise.videoFile = null;
    this.exercise.videoSource = null;
  }

}
