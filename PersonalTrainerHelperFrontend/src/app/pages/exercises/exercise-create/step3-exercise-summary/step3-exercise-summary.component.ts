import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Exercise } from 'src/app/shared/models/entities/exercise.model';

@Component({
  selector: 'app-step3-exercise-summary',
  templateUrl: './step3-exercise-summary.component.html',
  styleUrls: ['./step3-exercise-summary.component.scss']
})
export class Step3ExerciseSummaryComponent implements OnInit {
  @Input() public exercise: Exercise;
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
