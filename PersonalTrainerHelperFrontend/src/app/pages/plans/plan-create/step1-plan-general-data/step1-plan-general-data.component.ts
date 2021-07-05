import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Plan } from 'src/app/shared/models/entities/plan.model';

@Component({
  selector: 'app-step1-plan-general-data',
  templateUrl: './step1-plan-general-data.component.html',
  styleUrls: ['./step1-plan-general-data.component.scss']
})
export class Step1PlanGeneralDataComponent implements OnInit {
  @Input() public plan: Plan;
  @Output() nextStepEmitter: EventEmitter<any> = new EventEmitter();

  @ViewChild('generalDataForm', { static: false }) generalDataForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  public nextStep(){
    if(this.generalDataForm.valid){
      this.nextStepEmitter.emit();
    }
  }
}
