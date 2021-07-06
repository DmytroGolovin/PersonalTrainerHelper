import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Workout } from 'src/app/shared/models/entities/workout.model';
import { ExercisesSearchModel } from 'src/app/shared/models/search-models/exercises-search-model.model';
import { ExerciseService } from 'src/app/shared/services/api-consumers/exercise.service';
import { WorkoutExercicesModalComponent } from './workout-exercices-modal/workout-exercices-modal.component';

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

  constructor(private _exerciseService: ExerciseService,
              private _modalService: NgbModal) { }

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

  public addExerciesModal() {
    let searchModel = new ExercisesSearchModel();
    searchModel.personalTrainerId = this.workout.personalTrainerId;
    searchModel.pageNumber = 1;
    searchModel.pageSize = 10;

    this._exerciseService.getWithFilter(searchModel).subscribe(result => {
      const modalRef = this._modalService.open(WorkoutExercicesModalComponent, { size: 'xl', scrollable: true, backdrop: 'static', keyboard: false });

      modalRef.componentInstance.exercises = result.items;
      modalRef.componentInstance.totalItems = result.totalItems;
      modalRef.componentInstance.searchModel = searchModel;
      modalRef.componentInstance.workout = this.workout;

      modalRef.result.then(res => {
      });
    });
  }

  public removeExercise(id: number){
    let index = this.workout.exercises.findIndex(x => x.exerciseId == id);
    if(index != -1){
      this.workout.exercises.splice(index, 1);
    }
  }
}
