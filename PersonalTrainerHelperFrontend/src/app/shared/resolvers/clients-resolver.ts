import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientsSearchModel } from '../models/search-models/clients-search-model.model';
import { ClientService } from '../services/api-consumers/client.service';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class ClientsResolver implements Resolve<Observable<any>>{

    constructor(private _authService: AuthService,
                private _route: ActivatedRoute, 
                private _router: Router, 
                private _clientService: ClientService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const currentUser = this._authService.getCurrentUser();
        let searchModel = new ClientsSearchModel();
        searchModel.personalTrainerId = currentUser.uid;
        searchModel.pageNumber = 1;
        searchModel.pageSize = 10;
        return this._clientService.getWithFilter(searchModel);
    }
}