import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workout } from '../../models/entities/workout.model';
import { PaginatedResponse } from '../../models/responses/paginated-response.model';
import { WorkoutsSearchModel } from '../../models/search-models/workouts-search-model.model';
import { BaseService } from '../base.service';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private _baseService: BaseService,
    private constants: Constants) { }

  public getById(id: number): Observable<Workout> {
    return this._baseService.get<Workout>(this.constants.api.workouts.root + '/' + id);
  }

  public add(workout: Workout): Observable<any> {
    return this._baseService.post<Workout>(this.constants.api.workouts.root, workout);
  }

  public getWithFilter(searchModel: WorkoutsSearchModel): Observable<PaginatedResponse<Workout>> {
    return this._baseService.get<PaginatedResponse<Workout>>(this.constants.api.workouts.root, searchModel);
  }

  public delete(workout: Workout): Observable<any> {
    return this._baseService.delete<Workout>(this.constants.api.workouts.root, workout);
  }
}
