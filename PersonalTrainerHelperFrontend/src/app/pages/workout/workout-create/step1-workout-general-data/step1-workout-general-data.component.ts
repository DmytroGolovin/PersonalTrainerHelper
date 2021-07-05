import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Workout } from 'src/app/shared/models/entities/workout.model';

@Component({
  selector: 'app-step1-workout-general-data',
  templateUrl: './step1-workout-general-data.component.html',
  styleUrls: ['./step1-workout-general-data.component.scss']
})
export class Step1WorkoutGeneralDataComponent implements OnInit {

  @Input() public workout: Workout;
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
