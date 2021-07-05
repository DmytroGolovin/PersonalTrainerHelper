import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Workout } from 'src/app/shared/models/entities/workout.model';

@Component({
  selector: 'app-step3-workout-summary',
  templateUrl: './step3-workout-summary.component.html',
  styleUrls: ['./step3-workout-summary.component.scss']
})
export class Step3WorkoutSummaryComponent implements OnInit {

  @Input() public workout: Workout;
  @Output() saveEmitter: EventEmitter<any> = new EventEmitter();
  @Output() previousStepEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public save(){
    this.saveEmitter.emit(true);
  }

  public previousStep(){
    this.previousStepEmitter.emit();
  }

}
