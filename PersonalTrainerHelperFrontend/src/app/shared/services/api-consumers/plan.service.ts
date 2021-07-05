import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from '../../models/entities/plan.model';
import { PaginatedResponse } from '../../models/responses/paginated-response.model';
import { PlansSearchModel } from '../../models/search-models/plans-search-model.model';
import { BaseService } from '../base.service';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private _baseService: BaseService,
              private constants: Constants) { }

  public getById(id: number): Observable<Plan> {
    return this._baseService.get<Plan>(this.constants.api.plans.root + '/' + id);
  }

  public add(plan: Plan): Observable<any> {
    return this._baseService.post<Plan>(this.constants.api.plans.root, plan);
  }

  public getWithFilter(searchModel: PlansSearchModel): Observable<PaginatedResponse<Plan>> {
    return this._baseService.get<PaginatedResponse<Plan>>(this.constants.api.plans.root, searchModel);
  }

  public delete(plan: Plan): Observable<any> {
    return this._baseService.delete<Plan>(this.constants.api.plans.root, plan);
  }
}
