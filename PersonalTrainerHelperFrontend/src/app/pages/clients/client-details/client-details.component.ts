import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChartData, ChartOptions } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { Client } from 'src/app/shared/models/entities/client.model';
import { ClientService } from 'src/app/shared/services/api-consumers/client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  @Input() client: Client;

  constructor(public activeModal: NgbActiveModal,
              private _modalService: NgbModal,
              private _toasterService: ToastrService,
              private _clientService: ClientService) { }

  ngOnInit(): void {
    console.log(this.client);
  }

  public data: ChartData = {
    labels: ['17 June', '18 June', '19 June', '20 June', '21 June', '22 June', '23 June'],
    datasets: [
      {
        label: 'Weight',
        data: [81.4, 81.8, 81.6, 81.4, 81.1, 80.8, 80.5],
        fill: false,
        backgroundColor: [
          '#98ACF3',
          // 'rgba(255, 159, 64, 0.2)',
          // 'rgba(255, 205, 86, 0.2)',
          // 'rgba(75, 192, 192, 0.2)',
          // 'rgba(54, 162, 235, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          '#3F4AA3',
          // 'rgb(255, 99, 132)',
          // 'rgb(255, 159, 64)',
          // 'rgb(255, 205, 86)',
          // 'rgb(75, 192, 192)',
          // 'rgb(54, 162, 235)',
          // 'rgb(153, 102, 255)',
          // 'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  };

  public options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      // title: {
      //   display: true,
      //   text: 'Chart.js Doughnut Chart',
      // },
    },
  };

  public pieChartData: ChartData = {
    labels: ['Hidrates', 'Protein', 'Fats'],
    datasets: [
      {
        label: 'Weight',
        data: [60, 30, 10],
        fill: false,
        backgroundColor: [
          'rgba(255, 197, 52, 0.3)',
          'rgba(5, 155, 255, 0.3)',
          'rgba(255, 96, 130, 0.3)',
          // 'rgba(255, 159, 64, 0.2)',
          // 'rgba(255, 205, 86, 0.2)',
          // 'rgba(75, 192, 192, 0.2)',
          // 'rgba(54, 162, 235, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          '#FFC534',
          '#059BFF',
          '#FF6082',
          // 'rgb(255, 99, 132)',
          // 'rgb(255, 159, 64)',
          // 'rgb(255, 205, 86)',
          // 'rgb(75, 192, 192)',
          // 'rgb(54, 162, 235)',
          // 'rgb(153, 102, 255)',
          // 'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  };

  public pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      // title: {
      //   display: true,
      //   text: 'Chart.js Doughnut Chart',
      // },
    },
  };

  public confirmDelete(){
    const modal = this._modalService.open(ConfirmationModalComponent, { size: 'md', windowClass: 'confirm', backdrop: 'static', keyboard: false});
    modal.componentInstance.message = "Are you sure you want to delete this client?";
    modal.result.then(res => {
      this.delete();
    }, () => { });  
  }

  public delete(){
    this._clientService.delete(this.client).subscribe(res =>{
      this._toasterService.success("Client deleted successfully!");
      this.activeModal.close();
    });
  }

  public updateClient(){
    
  }
  
}
