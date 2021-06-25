import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercise } from '../../models/entities/exercise.model';
import { PaginatedResponse } from '../../models/responses/paginated-response.model';
import { ExercisesSearchModel } from '../../models/search-models/exercises-search-model.model';
import { BaseService } from '../base.service';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private _baseService: BaseService,
    private constants: Constants) { }

  public getById(id: number): Observable<Exercise> {
    return this._baseService.get<Exercise>(this.constants.api.clients.root + '/' + id);
  }

  public add(client: Exercise): Observable<any> {
    return this._baseService.post<Exercise>(this.constants.api.clients.root, client);
  }

  public getWithFilter(searchModel: ExercisesSearchModel): Observable<PaginatedResponse<Exercise>> {
    return this._baseService.get<PaginatedResponse<Exercise>>(this.constants.api.clients.root, searchModel);
  }

  public delete(exercise: Exercise): Observable<any> {
    return this._baseService.delete<Exercise>(this.constants.api.clients.root, exercise);
  }
}
