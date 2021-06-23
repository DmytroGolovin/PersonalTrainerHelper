import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/shared/models/entities/client.model';

@Component({
  selector: 'app-step1-general-data',
  templateUrl: './step1-general-data.component.html',
  styleUrls: ['./step1-general-data.component.scss']
})
export class Step1GeneralDataComponent implements OnInit {
  @Input() public client: Client;
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
