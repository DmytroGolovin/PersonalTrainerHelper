import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../services/utils/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  public isLoading: Subject<boolean> = this._loaderService.isLoading;

  constructor(private _loaderService: LoaderService) {}

  ngOnInit(): void {
  }

}