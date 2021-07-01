import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Exercise } from 'src/app/shared/models/entities/exercise.model';
import { ExerciseService } from 'src/app/shared/services/api-consumers/exercise.service';
import { UUID } from 'angular2-uuid';
import { LoaderService } from 'src/app/shared/services/utils/loader.service';

@Component({
  selector: 'app-exercise-create',
  templateUrl: './exercise-create.component.html',
  styleUrls: ['./exercise-create.component.scss']
})
export class ExerciseCreateComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  @Input() personalTrainerId: string;

  public exercise: Exercise = new Exercise();

  constructor(public activeModal: NgbActiveModal,
              private _exerciseService: ExerciseService,
              private _loaderService: LoaderService,
              private _toasterService: ToastrService) { }

  ngOnInit(): void {
    this.exercise.personalTrainerId = this.personalTrainerId;
    this.exercise.videoStorageId = UUID.UUID();
  }

  public nextClicked() {
    // complete the current step
    this.stepper.selected.completed = true;
    // move to next step
    this.stepper.next();
  }

  public save() {

    if(this.exercise.videoURL){
      this.exercise.videoStorageId = null;
      this.saveCall();
    }else{
      this._loaderService.show();
      this._exerciseService.uploadExerciseVideo(this.exercise.videoFile, this.exercise.personalTrainerId, this.exercise.videoStorageId).subscribe(generatedUrl => {
        this.exercise.videoURL = generatedUrl;
        this._loaderService.hide();
        this.saveCall();
      });
    }    
  }

  private saveCall(){
    this.exercise.videoFile = null;
    this.exercise.videoSource = null;
    this._exerciseService.add(this.exercise).subscribe(res => {
      if(res > 0){
        this._toasterService.success("Exercise created successfully!");
        this.activeModal.close();
      }else {
        this._toasterService.error("Something went wrong! Try later or contact support.");
      }
    });
  }

}
