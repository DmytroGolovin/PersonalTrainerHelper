import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { BaseService } from '../base.service';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private _baseService: BaseService,
    private constants: Constants) { }

  public getClients(): Observable<Array<User>> {
    return this._baseService.get<Array<User>>(this.constants.api.products.root);
  }

  public addClient(user: User): Observable<any> {
    return this._baseService.post<User>(this.constants.api.products.root, user);
  }

  // public getWithFilter(searchModel: ProductSearchModel): Observable<PaginatedResponse<Product>> {
  //   return this._baseService.get<PaginatedResponse<Product>>(this.constants.api.products.getWithFilters, searchModel);
  // }

  // public getByKey(key: string): Observable<Product> {
  //   return this._baseService.get<Product>(this.constants.api.products.getByKey + key);
  // }
}
