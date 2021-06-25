import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/shared/models/entities/client.model';
import { ClientService } from 'src/app/shared/services/api-consumers/client.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  @Input() personalTrainerId: string;

  public client: Client = new Client();
  constructor(public activeModal: NgbActiveModal,
              private _toasterService: ToastrService,
              private _clientService: ClientService) { }

  ngOnInit(): void {
    this.client.personalTrainerId = this.personalTrainerId;
  }

  public nextClicked() {
    // complete the current step
    this.stepper.selected.completed = true;
    // move to next step
    this.stepper.next();
  }

  public save() {
    this._clientService.add(this.client).subscribe(res => {
      console.log(res);
      this._toasterService.success("Client created successfully!");
      this.activeModal.close();
    });
  }
}
