import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/shared/models/user.model';
import { ClientService } from 'src/app/shared/services/api-consumers/client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;

  public user: User = new User();
  constructor(public activeModal: NgbActiveModal,
    private _clientService: ClientService) { }

  ngOnInit(): void {
  }

  public nextClicked(event) {
    // complete the current step
    this.stepper.selected.completed = true;
    // move to next step
    this.stepper.next();
  }

  public save() {
    this._clientService.addClient(this.user).subscribe(res => {
      console.log("Done!");
      this.activeModal.close()
    });
  }
}
