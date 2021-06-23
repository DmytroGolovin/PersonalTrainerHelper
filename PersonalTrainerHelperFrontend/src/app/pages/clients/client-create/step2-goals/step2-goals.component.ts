import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/shared/models/entities/client.model';

@Component({
  selector: 'app-step2-goals',
  templateUrl: './step2-goals.component.html',
  styleUrls: ['./step2-goals.component.scss']
})
export class Step2GoalsComponent implements OnInit {
  @Input() public client: Client;
  @Output() nextStepEmitter: EventEmitter<any> = new EventEmitter();
  @Output() previousStepEmitter: EventEmitter<any> = new EventEmitter();

  @ViewChild('goalsForm', { static: false }) goalsForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  public nextStep(){
    if(this.goalsForm.valid){
      this.nextStepEmitter.emit();
    }
  }

  public previousStep(){
    this.previousStepEmitter.emit();
  }

}
