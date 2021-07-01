import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { Exercise } from 'src/app/shared/models/entities/exercise.model';
import { ExerciseService } from 'src/app/shared/services/api-consumers/exercise.service';
import { LoaderService } from 'src/app/shared/services/utils/loader.service';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.scss']
})
export class ExerciseDetailsComponent implements OnInit {
  @Input() exercise: Exercise;

  constructor(public activeModal: NgbActiveModal,
              private _exerciseService: ExerciseService,
              private _loaderService: LoaderService,
              private _toasterService: ToastrService,
              private _modalService: NgbModal) { }

  ngOnInit(): void {
    console.log(this.exercise);
  }

  public confirmDelete(){
    const modal = this._modalService.open(ConfirmationModalComponent, { size: 'md', windowClass: 'confirm', backdrop: 'static', keyboard: false});
    modal.componentInstance.message = "Are you sure you want to delete this exercise?";
    modal.result.then(res => {
      this.delete();
    }, () => { });  
  }

  public delete(){
    this._exerciseService.delete(this.exercise).subscribe(res =>{
      if(res > 0){
        if(this.exercise.videoStorageId){
          try{
            this._loaderService.show();
            this._exerciseService.deleteExerciseVideo(this.exercise.personalTrainerId, this.exercise.videoStorageId).subscribe(res => {
              this._toasterService.success("Exercise deleted successfully!");
              this._loaderService.hide();
              this.activeModal.close();
            });
          }catch(e){
            this._toasterService.error("Something went wrong! Try later or contact support.");
          }
        }else {
          this._toasterService.success("Exercise deleted successfully!");
          this.activeModal.close();
        }

      }else{
        this._toasterService.error("Something went wrong! Try later or contact support.");
      }
      
    });
  }

  public updateClient(){
    
  }

}
