import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Workout } from 'src/app/shared/models/entities/workout.model';
import { WorkoutService } from 'src/app/shared/services/api-consumers/workout.service';

@Component({
  selector: 'app-workout-create',
  templateUrl: './workout-create.component.html',
  styleUrls: ['./workout-create.component.scss']
})
export class WorkoutCreateComponent implements OnInit {

  @ViewChild('stepper') stepper: MatStepper;
  @Input() personalTrainerId: string;

  public workout: Workout = new Workout();

  constructor(public activeModal: NgbActiveModal,
              private _workoutService: WorkoutService,
              private _toasterService: ToastrService) { }

  ngOnInit(): void {
    this.workout.personalTrainerId = this.personalTrainerId;
  }

  public nextClicked() {
    // complete the current step
    this.stepper.selected.completed = true;
    // move to next step
    this.stepper.next();
  }

  public save() {

    this._workoutService.add(this.workout).subscribe(res => {
      if(res > 0){
        this._toasterService.success("Workout created successfully!");
        this.activeModal.close();
      }else {
        this._toasterService.error("Something went wrong! Try later or contact support.");
      }
    });
  }
}
