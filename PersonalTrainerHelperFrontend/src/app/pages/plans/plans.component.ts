import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Constants } from 'src/app/shared/services/constants';
import { PlansSearchModel } from 'src/app/shared/models/search-models/plans-search-model.model';
import { Plan } from 'src/app/shared/models/entities/plan.model';
import { PlanService } from 'src/app/shared/services/api-consumers/plan.service';
import { PlanCreateComponent } from './plan-create/plan-create.component';
import { PlanDetailsComponent } from './plan-details/plan-details.component';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PlansComponent implements OnInit {
  @ViewChild('searchForm', { static: false }) searchForm: NgForm;

  public totalItems: number;
  public plans: Array<Plan> = [];

  public searchModel: PlansSearchModel;
  public pageSizeOptions: Array<number> = new Array<number>();

  constructor(private _modalService: NgbModal,
              private constants: Constants,
              private _authService: AuthService,
              private _planService: PlanService,
              private _route: ActivatedRoute) { 
                this.pageSizeOptions = this.constants.commonConfigs.pageSizeOptions;
              }

  ngOnInit(): void {
    this._route.data.subscribe( data => {
      const res = data['plans'];
      this.plans = res.items;
      this.totalItems = res.totalItems;
    });

    this.setSearchModel();
  }

  public setSearchModel(){
    const currentUser = this._authService.getCurrentUser();
    this.searchModel = new PlansSearchModel();
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
    this._planService.getWithFilter(this.searchModel).subscribe(res => {
      this.plans = res.items;
      this.totalItems = res.totalItems;
    });
  }

  public openCreateModal() {
    const modalRef = this._modalService.open(PlanCreateComponent, { size: 'xl', scrollable: true, backdrop: 'static', keyboard: false });

    modalRef.componentInstance.personalTrainerId = this.searchModel.personalTrainerId;

    modalRef.result.then(res => {
      this.search();
    });
  }

  public openDetailsModal(id: number) {
    this._planService.getById(id).subscribe(exercise => {
      const modalRef = this._modalService.open(PlanDetailsComponent, { size: 'xl', scrollable: true, backdrop: 'static', keyboard: false });

      modalRef.componentInstance.exercise = exercise;

      modalRef.result.then(res => {
        this.search();
      });
    });
  }
}
