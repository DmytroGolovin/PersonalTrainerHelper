import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ExercisesSearchModel } from '../models/search-models/exercises-search-model.model';
import { ExerciseService } from '../services/api-consumers/exercise.service';
import { AuthService } from '../services/auth/auth.service';
import { Constants } from '../services/constants';

@Injectable()
export class ExercisesResolver implements Resolve<Observable<any>>{

    constructor(private _authService: AuthService,
                private constants: Constants, 
                private _exerciseService: ExerciseService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const currentUser = this._authService.getCurrentUser();
        let searchModel = new ExercisesSearchModel();
        searchModel.personalTrainerId = currentUser.uid;
        searchModel.pageNumber = 1;
        searchModel.pageSize = this.constants.commonConfigs.pageSize;
        return this._exerciseService.getWithFilter(searchModel);
    }
}