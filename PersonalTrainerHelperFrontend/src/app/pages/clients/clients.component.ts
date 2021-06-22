import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  public name: string;

  constructor() { }

  ngOnInit(): void {
  }

  public applyFilters(){

  }

}
