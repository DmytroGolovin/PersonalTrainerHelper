import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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

  public client: Client = new Client();
  constructor(public activeModal: NgbActiveModal,
              private _authService: AuthService,
              private _clientService: ClientService) { }

  ngOnInit(): void {
  }

  public nextClicked() {
    // complete the current step
    this.stepper.selected.completed = true;
    // move to next step
    this.stepper.next();
  }

  public save() {
    let currentUser = this._authService.getCurrentUser();
    this.client.personalTrainerId = currentUser.uid;
    this._clientService.addClient(this.client).subscribe(res => {
      this.activeModal.close();
    });
  }
}
