  
import { Injectable } from "@angular/core";

@Injectable()
export class Constants{
    public api = {
        home: 'api',
        products: {
            root: 'products',
            getWithFilters: 'products/getWithFilters',
            getByKey: 'products/getByKey/'
        }
    }
}