import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Workout } from 'src/app/shared/models/entities/workout.model';

@Component({
  selector: 'app-step2-workout-exercises',
  templateUrl: './step2-workout-exercises.component.html',
  styleUrls: ['./step2-workout-exercises.component.scss']
})
export class Step2WorkoutExercisesComponent implements OnInit {

  @Input() public workout: Workout;
  @Output() nextStepEmitter: EventEmitter<any> = new EventEmitter();
  @Output() previousStepEmitter: EventEmitter<any> = new EventEmitter();

  @ViewChild('exercisesForm', { static: false }) exercisesForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  public nextStep(){
    if(this.exercisesForm.valid){
      this.nextStepEmitter.emit();
    }
  }

  public previousStep(){
    this.previousStepEmitter.emit();
  }
}
