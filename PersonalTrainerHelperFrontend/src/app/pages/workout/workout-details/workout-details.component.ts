import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { Workout } from 'src/app/shared/models/entities/workout.model';
import { WorkoutService } from 'src/app/shared/services/api-consumers/workout.service';

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.component.html',
  styleUrls: ['./workout-details.component.scss']
})
export class WorkoutDetailsComponent implements OnInit {

  @Input() workout: Workout;

  constructor(public activeModal: NgbActiveModal,
              private _workoutService: WorkoutService,
              private _toasterService: ToastrService,
              private _modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public confirmDelete(){
    const modal = this._modalService.open(ConfirmationModalComponent, { size: 'md', windowClass: 'confirm', backdrop: 'static', keyboard: false});
    modal.componentInstance.message = "Are you sure you want to delete this workout?";
    modal.result.then(res => {
      this.delete();
    }, () => { });  
  }

  public delete(){
    this._workoutService.delete(this.workout).subscribe(res =>{
      if(res > 0){
        this._toasterService.success("Workout deleted successfully!");
        this.activeModal.close();
      }else{
        this._toasterService.error("Something went wrong! Try later or contact support.");
      }
    });
  }

  public updateClient(){
    
  }

}
