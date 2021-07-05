import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Plan } from 'src/app/shared/models/entities/plan.model';
import { PlanService } from 'src/app/shared/services/api-consumers/plan.service';

@Component({
  selector: 'app-plan-create',
  templateUrl: './plan-create.component.html',
  styleUrls: ['./plan-create.component.scss']
})
export class PlanCreateComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  @Input() personalTrainerId: string;

  public plan: Plan = new Plan();

  constructor(public activeModal: NgbActiveModal,
              private _planService: PlanService,
              private _toasterService: ToastrService) { }

  ngOnInit(): void {
    this.plan.personalTrainerId = this.personalTrainerId;
  }

  public nextClicked() {
    // complete the current step
    this.stepper.selected.completed = true;
    // move to next step
    this.stepper.next();
  }

  public save() {

    this._planService.add(this.plan).subscribe(res => {
      if(res > 0){
        this._toasterService.success("Plan created successfully!");
        this.activeModal.close();
      }else {
        this._toasterService.error("Something went wrong! Try later or contact support.");
      }
    });
  }
}
