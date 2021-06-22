
import { Injectable } from "@angular/core";

@Injectable()
export class Constants {
  public api = {
    home: 'api',
    products: {
      root: 'clients',
      getWithFilters: 'clients/getWithFilters',
      getByKey: 'clients'
    }
  }
}
