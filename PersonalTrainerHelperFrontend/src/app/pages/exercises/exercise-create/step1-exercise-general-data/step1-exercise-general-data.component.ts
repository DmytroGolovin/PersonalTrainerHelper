import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from 'src/app/shared/models/entities/exercise.model';

@Component({
  selector: 'app-step1-exercise-general-data',
  templateUrl: './step1-exercise-general-data.component.html',
  styleUrls: ['./step1-exercise-general-data.component.scss']
})
export class Step1ExerciseGeneralDataComponent implements OnInit {

  @Input() public exercise: Exercise;
  @Output() nextStepEmitter: EventEmitter<any> = new EventEmitter();

  @ViewChild('generalDataForm', { static: false }) generalDataForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  public nextStep(){
    if(this.generalDataForm.valid){
      this.nextStepEmitter.emit();
    }
  }

}
