import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;

  public user: User = new User();
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public nextClicked(event) {
    // complete the current step
    this.stepper.selected.completed = true;
    // move to next step
    this.stepper.next();
  }

  public save(){
    console.log(this.user);
    //this.activeModal.close()
  }
}
