import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/shared/models/entities/client.model';
import { ClientsSearchModel } from 'src/app/shared/models/search-models/clients-search-model.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ClientCreateComponent } from './client-create/client-create.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  @ViewChild('searchForm', { static: false }) searchForm: NgForm;

  public name: string;
  public totalItems: number;
  public clients: Array<Client> = [];

  public searchModel: ClientsSearchModel;

  constructor(private _modalService: NgbModal,
              private _authService: AuthService,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.data.subscribe( data => {
      const res = data['clients'];
      console.log(res);
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
    this.searchModel.pageSize = 10;
  }

  public clearFilters(){
    if (this.searchForm != null) {
      this.searchForm.reset();
      this.search();
    }
  }

  public applyFilters(){
    console.log(this.searchModel);
  }

  public search(){

  }

  public openCreateModal() {
    const modalRef = this._modalService.open(ClientCreateComponent, { size: 'xl', scrollable: true, backdrop: 'static', keyboard: false });

    modalRef.componentInstance.projectId = 'test';

    modalRef.result.then(res => {
      this.search();
    });
  }

}
