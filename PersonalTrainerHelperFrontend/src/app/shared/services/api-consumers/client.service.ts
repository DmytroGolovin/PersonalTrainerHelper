import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/entities/client.model';
import { PaginatedResponse } from '../../models/responses/paginated-response.model';
import { ClientsSearchModel } from '../../models/search-models/clients-search-model.model';
import { BaseService } from '../base.service';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private _baseService: BaseService,
    private constants: Constants) { }

  public getById(id: number): Observable<Client> {
    return this._baseService.get<Client>(this.constants.api.clients.root + '/' + id);
  }

  public add(client: Client): Observable<any> {
    return this._baseService.post<Client>(this.constants.api.clients.root, client);
  }

  public getWithFilter(searchModel: ClientsSearchModel): Observable<PaginatedResponse<Client>> {
    return this._baseService.get<PaginatedResponse<Client>>(this.constants.api.clients.root, searchModel);
  }

  public delete(client: Client): Observable<any> {
    return this._baseService.delete<Client>(this.constants.api.clients.root, client);
  }
}
