import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientCreateComponent } from './client-create/client-create.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  @ViewChild('searchForm', { static: false }) searchForm: NgForm;

  public name: string;

  constructor(private _modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public clearFilters(){
    if (this.searchForm != null) {
      this.searchForm.reset();
      this.search();
    }
  }

  public applyFilters(){

  }

  public search(){

  }

  public openCreateModal() {
    const modalRef = this._modalService.open(ClientCreateComponent, { size: 'xl', scrollable: true, backdrop: 'static', keyboard: false });

    modalRef.componentInstance.projectId = 'test';

    modalRef.result.then(res => {
      this.applyFilters();
    });
  }

}
