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

  public getClients(): Observable<Array<Client>> {
    return this._baseService.get<Array<Client>>(this.constants.api.clients.root);
  }

  public addClient(client: Client): Observable<any> {
    return this._baseService.post<Client>(this.constants.api.clients.root, client);
  }

  public getWithFilter(searchModel: ClientsSearchModel): Observable<PaginatedResponse<Client>> {
    return this._baseService.get<PaginatedResponse<Client>>(this.constants.api.clients.root, searchModel);
  }

  // public getByKey(key: string): Observable<Product> {
  //   return this._baseService.get<Product>(this.constants.api.products.getByKey + key);
  // }
}
