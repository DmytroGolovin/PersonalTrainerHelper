import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Exercise } from 'src/app/shared/models/entities/exercise.model';
import { ExerciseService } from 'src/app/shared/services/api-consumers/exercise.service';

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
              private _toasterService: ToastrService) { }

  ngOnInit(): void {
  }

  public nextClicked() {
    // complete the current step
    this.stepper.selected.completed = true;
    // move to next step
    this.stepper.next();
  }

  public save() {
    this._exerciseService.uploadExerciseVideo(this.exercise.videoFile).subscribe(res => {
      console.log(res);
    });
    
    // this._exerciseService.add(this.exercise).subscribe(res => {
    //   this._toasterService.success("Exercise created successfully!");
    //   this.activeModal.close();
    // });
  }

}
