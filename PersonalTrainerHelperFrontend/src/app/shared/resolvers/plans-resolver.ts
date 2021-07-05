import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { PlansSearchModel } from "../models/search-models/plans-search-model.model";
import { PlanService } from "../services/api-consumers/plan.service";
import { AuthService } from "../services/auth/auth.service";
import { Constants } from "../services/constants";

@Injectable()
export class PlansResolver implements Resolve<Observable<any>>{

    constructor(private _authService: AuthService,
                private constants: Constants, 
                private _planService: PlanService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const currentUser = this._authService.getCurrentUser();
        let searchModel = new PlansSearchModel();
        searchModel.personalTrainerId = currentUser.uid;
        searchModel.pageNumber = 1;
        searchModel.pageSize = this.constants.commonConfigs.pageSize;
        return this._planService.getWithFilter(searchModel);
    }
}