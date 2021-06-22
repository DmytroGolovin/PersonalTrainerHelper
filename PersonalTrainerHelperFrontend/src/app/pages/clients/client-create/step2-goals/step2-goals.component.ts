import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-step2-goals',
  templateUrl: './step2-goals.component.html',
  styleUrls: ['./step2-goals.component.scss']
})
export class Step2GoalsComponent implements OnInit {
  @Input() public user: User;
  @Output() nextStepEmitter: EventEmitter<any> = new EventEmitter();
  @Output() previousStepEmitter: EventEmitter<any> = new EventEmitter();

  @ViewChild('goalsForm', { static: false }) goalsForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  public nextStep(){
    if(this.goalsForm.valid){
      this.nextStepEmitter.emit(true);
    }
  }

  public previousStep(){
    this.previousStepEmitter.emit();
  }

}
