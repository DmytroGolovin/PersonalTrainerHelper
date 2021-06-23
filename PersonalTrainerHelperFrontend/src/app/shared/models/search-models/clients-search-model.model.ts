import { BaseSearchModel } from "./base-search-model.model";

export class ClientsSearchModel extends BaseSearchModel{
    personalTrainerId: string;
    searchExpression: string;
}