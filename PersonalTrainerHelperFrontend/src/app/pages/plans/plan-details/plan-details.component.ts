import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { Plan } from 'src/app/shared/models/entities/plan.model';
import { PlanService } from 'src/app/shared/services/api-consumers/plan.service';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.scss']
})
export class PlanDetailsComponent implements OnInit {
  @Input() plan: Plan;

  constructor(public activeModal: NgbActiveModal,
              private _planService: PlanService,
              private _toasterService: ToastrService,
              private _modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public confirmDelete(){
    const modal = this._modalService.open(ConfirmationModalComponent, { size: 'md', windowClass: 'confirm', backdrop: 'static', keyboard: false});
    modal.componentInstance.message = "Are you sure you want to delete this plan?";
    modal.result.then(res => {
      this.delete();
    }, () => { });  
  }

  public delete(){
    this._planService.delete(this.plan).subscribe(res =>{
      if(res > 0){
        this._toasterService.success("Plan deleted successfully!");
        this.activeModal.close();
      }else{
        this._toasterService.error("Something went wrong! Try later or contact support.");
      }
    });
  }

  public updateClient(){
    
  }

}
