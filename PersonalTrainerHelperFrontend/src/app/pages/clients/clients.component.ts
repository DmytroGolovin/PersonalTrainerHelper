import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/shared/models/entities/client.model';
import { ClientsSearchModel } from 'src/app/shared/models/search-models/clients-search-model.model';
import { ClientService } from 'src/app/shared/services/api-consumers/client.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ClientCreateComponent } from './client-create/client-create.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { Constants } from 'src/app/shared/services/constants';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ClientsComponent implements OnInit {

  @ViewChild('searchForm', { static: false }) searchForm: NgForm;

  public name: string;
  public totalItems: number;
  public clients: Array<Client> = [];

  public searchModel: ClientsSearchModel;
  public pageSizeOptions: Array<number> = new Array<number>();

  constructor(private _modalService: NgbModal,
              private constants: Constants,
              private _authService: AuthService,
              private _clientService: ClientService,
              private _route: ActivatedRoute) { 
                this.pageSizeOptions = this.constants.commonConfigs.pageSizeOptions;
              }

  ngOnInit(): void {
    this._route.data.subscribe( data => {
      const res = data['clients'];
      this.clients = res.items;
      this.totalItems = res.totalItems;
    });

    this.setSearchModel();
  }

  public setSearchModel(){
    const currentUser = this._authService.getCurrentUser();
    this.searchModel = new ClientsSearchModel();
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
    this._clientService.getWithFilter(this.searchModel).subscribe(res => {
      this.clients = res.items;
      this.totalItems = res.totalItems;
    });
  }

  public openCreateModal() {
    const modalRef = this._modalService.open(ClientCreateComponent, { size: 'xl', scrollable: true, backdrop: 'static', keyboard: false });

    modalRef.componentInstance.personalTrainerId = this.searchModel.personalTrainerId;

    modalRef.result.then(res => {
      this.search();
    });
  }

  public openDetailsModal(id: number) {
    this._clientService.getById(id).subscribe(client => {
      const modalRef = this._modalService.open(ClientDetailsComponent, { size: 'xl', scrollable: true, backdrop: 'static', keyboard: false });

      modalRef.componentInstance.client = client;

      modalRef.result.then(res => {
        this.search();
      });
    });
  }

}
