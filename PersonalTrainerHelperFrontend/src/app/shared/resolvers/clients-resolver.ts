import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientsSearchModel } from '../models/search-models/clients-search-model.model';
import { ClientService } from '../services/api-consumers/client.service';
import { AuthService } from '../services/auth/auth.service';
import { Constants } from '../services/constants';

@Injectable()
export class ClientsResolver implements Resolve<Observable<any>>{

    constructor(private _authService: AuthService,
                private constants: Constants,
                private _clientService: ClientService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const currentUser = this._authService.getCurrentUser();

        let searchModel = new ClientsSearchModel();
        searchModel.personalTrainerId = currentUser.uid;
        searchModel.pageNumber = 1;
        searchModel.pageSize = this.constants.commonConfigs.pageSize;

        return this._clientService.getWithFilter(searchModel);
    }
}
