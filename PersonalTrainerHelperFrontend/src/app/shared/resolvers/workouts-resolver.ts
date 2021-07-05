import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { WorkoutsSearchModel } from "../models/search-models/workouts-search-model.model";
import { WorkoutService } from "../services/api-consumers/workout.service";
import { AuthService } from "../services/auth/auth.service";
import { Constants } from "../services/constants";

@Injectable()
export class WorkoutsResolver implements Resolve<Observable<any>>{

    constructor(private _authService: AuthService,
                private constants: Constants, 
                private _workoutService: WorkoutService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const currentUser = this._authService.getCurrentUser();
        let searchModel = new WorkoutsSearchModel();
        searchModel.personalTrainerId = currentUser.uid;
        searchModel.pageNumber = 1;
        searchModel.pageSize = this.constants.commonConfigs.pageSize;
        return this._workoutService.getWithFilter(searchModel);
    }
}