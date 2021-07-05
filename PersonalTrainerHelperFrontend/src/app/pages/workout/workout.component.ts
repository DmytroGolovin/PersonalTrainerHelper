import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Workout } from 'src/app/shared/models/entities/workout.model';
import { WorkoutsSearchModel } from 'src/app/shared/models/search-models/workouts-search-model.model';
import { WorkoutService } from 'src/app/shared/services/api-consumers/workout.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Constants } from 'src/app/shared/services/constants';
import { WorkoutCreateComponent } from './workout-create/workout-create.component';
import { WorkoutDetailsComponent } from './workout-details/workout-details.component';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  @ViewChild('searchForm', { static: false }) searchForm: NgForm;

  public totalItems: number;
  public workouts: Array<Workout> = [];

  public searchModel: WorkoutsSearchModel;
  public pageSizeOptions: Array<number> = new Array<number>();

  constructor(private _modalService: NgbModal,
              private constants: Constants,
              private _authService: AuthService,
              private _workoutService: WorkoutService,
              private _route: ActivatedRoute) { 
                this.pageSizeOptions = this.constants.commonConfigs.pageSizeOptions;
              }

  ngOnInit(): void {
    this._route.data.subscribe( data => {
      const res = data['workouts'];
      this.workouts = res.items;
      this.totalItems = res.totalItems;
    });

    this.setSearchModel();
  }

  public setSearchModel(){
    const currentUser = this._authService.getCurrentUser();
    this.searchModel = new WorkoutsSearchModel();
    this.searchModel.personalTrainerId = currentUser.uid;
    this.searchModel.pageNumber = 1;
    this.searchModel.pageSize = this.constants.commonConfigs.pageSize;
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
    this._workoutService.getWithFilter(this.searchModel).subscribe(res => {
      this.workouts = res.items;
      this.totalItems = res.totalItems;
    });
  }

  public openCreateModal() {
    const modalRef = this._modalService.open(WorkoutCreateComponent, { size: 'xl', scrollable: true, backdrop: 'static', keyboard: false });

    modalRef.componentInstance.personalTrainerId = this.searchModel.personalTrainerId;

    modalRef.result.then(res => {
      this.search();
    });
  }

  public openDetailsModal(id: number) {
    this._workoutService.getById(id).subscribe(exercise => {
      const modalRef = this._modalService.open(WorkoutDetailsComponent, { size: 'xl', scrollable: true, backdrop: 'static', keyboard: false });

      modalRef.componentInstance.exercise = exercise;

      modalRef.result.then(res => {
        this.search();
      });
    });
  }

}
