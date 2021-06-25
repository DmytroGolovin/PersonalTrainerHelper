import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Constants } from 'src/app/shared/services/constants';
import { ExerciseCreateComponent } from './exercise-create/exercise-create.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';
import { Exercise } from 'src/app/shared/models/entities/exercise.model';
import { ExercisesSearchModel } from 'src/app/shared/models/search-models/exercises-search-model.model';
import { ExerciseService } from 'src/app/shared/services/api-consumers/exercise.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ExercisesComponent implements OnInit {
  @ViewChild('searchForm', { static: false }) searchForm: NgForm;

  public name: string;
  public totalItems: number;
  public exercises: Array<Exercise> = [];

  public searchModel: ExercisesSearchModel;
  public pageSizeOptions: Array<number> = new Array<number>();

  constructor(private _modalService: NgbModal,
              private constants: Constants,
              private _authService: AuthService,
              private _exerciseService: ExerciseService,
              private _route: ActivatedRoute) { 
                this.pageSizeOptions = this.constants.commonConfigs.pageSizeOptions;
              }

  ngOnInit(): void {
    this._route.data.subscribe( data => {
      const res = data['exercises'];
      this.exercises = res.items;
      this.totalItems = res.totalItems;
    });

    this.setSearchModel();
  }

  public setSearchModel(){
    const currentUser = this._authService.getCurrentUser();
    this.searchModel = new ExercisesSearchModel();
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
    this._exerciseService.getWithFilter(this.searchModel).subscribe(res => {
      this.exercises = res.items;
      this.totalItems = res.totalItems;
    });
  }

  public openCreateModal() {
    const modalRef = this._modalService.open(ExerciseCreateComponent, { size: 'xl', scrollable: true, backdrop: 'static', keyboard: false });

    modalRef.componentInstance.personalTrainerId = this.searchModel.personalTrainerId;

    modalRef.result.then(res => {
      this.search();
    });
  }

  public openDetailsModal(id: number) {
    this._exerciseService.getById(id).subscribe(client => {
      const modalRef = this._modalService.open(ExerciseDetailsComponent, { size: 'xl', scrollable: true, backdrop: 'static', keyboard: false });

      modalRef.componentInstance.client = client;

      modalRef.result.then(res => {
        this.search();
      });
    });
  }

}
