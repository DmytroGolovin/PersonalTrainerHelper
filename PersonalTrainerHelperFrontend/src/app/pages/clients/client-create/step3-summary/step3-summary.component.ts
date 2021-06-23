import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from 'src/app/shared/models/entities/client.model';

@Component({
  selector: 'app-step3-summary',
  templateUrl: './step3-summary.component.html',
  styleUrls: ['./step3-summary.component.scss']
})
export class Step3SummaryComponent implements OnInit {
  @Input() public client: Client;
  @Output() saveEmitter: EventEmitter<any> = new EventEmitter();
  @Output() previousStepEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public save(){
    this.saveEmitter.emit(true);
  }

  public previousStep(){
    this.previousStepEmitter.emit();
  }
}
