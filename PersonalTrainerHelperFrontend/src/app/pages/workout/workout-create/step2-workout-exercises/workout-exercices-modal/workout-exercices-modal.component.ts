import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Exercise } from 'src/app/shared/models/entities/exercise.model';
import { WorkoutExercise } from 'src/app/shared/models/entities/workout-exercise.model';
import { Workout } from 'src/app/shared/models/entities/workout.model';
import { ExercisesSearchModel } from 'src/app/shared/models/search-models/exercises-search-model.model';
import { ExerciseService } from 'src/app/shared/services/api-consumers/exercise.service';
import { Constants } from 'src/app/shared/services/constants';

@Component({
  selector: 'app-workout-exercices-modal',
  templateUrl: './workout-exercices-modal.component.html',
  styleUrls: ['./workout-exercices-modal.component.scss']
})
export class WorkoutExercicesModalComponent implements OnInit {
  @Input() public exercises: Array<Exercise>;
  @Input() public totalItems: number;
  @Input() public searchModel: ExercisesSearchModel;
  @Input() public workout: Workout;

  public selectedExercises: Array<Exercise>;

  @ViewChild('searchForm', { static: false }) searchForm: NgForm;

  public pageSizeOptions: Array<number> = new Array<number>();
  
  constructor(private constants: Constants,
              public activeModal: NgbActiveModal,
              private _exerciseService: ExerciseService) { 
      this.pageSizeOptions = this.constants.commonConfigs.pageSizeOptions;
    }

  ngOnInit(): void {
    this.selectedExercises = [];
    this.workout.exercises.forEach(workoutExercise => {
      this.selectedExercises.push(workoutExercise.exercise);
    });
    console.log(this.selectedExercises)
  }

  public pageEvent(pageEvent : PageEvent){
    this.searchModel.pageNumber = pageEvent.pageIndex + 1;
    this.searchModel.pageSize = pageEvent.pageSize;
    this.search();
  }

  public clearFilters(){
    if (this.searchForm != null) {
      this.searchForm.reset();
      this.search();
    }
  }

  public applyFilters(){
    this.searchModel.pageNumber = 1;
    this.search();
  }

  public search(){
    this._exerciseService.getWithFilter(this.searchModel).subscribe(res => {
      this.exercises = res.items;
      this.totalItems = res.totalItems;
    });
  }

  public save(){
    this.workout.exercises = [];
    this.selectedExercises.forEach(exercise => {
      let workoutExercise = new WorkoutExercise();
      workoutExercise.exercise = exercise;
      workoutExercise.exerciseId = exercise.id;
      this.workout.exercises.push(workoutExercise);
    });
    this.activeModal.close();
  }

  public selectExercise(exercise: Exercise){
    this.selectedExercises.push(exercise);
  }

  public unselectExercise(id: number){
    let index = this.selectedExercises.findIndex(x => x.id == id);
    if(index != -1){
      this.selectedExercises.splice(index, 1);
    }
  }

  public exerciseIsSelected(id: number){
    let index = this.selectedExercises.findIndex(x => x.id == id);

    if(index != -1){
      return true;
    }
    return false;
  }
}
