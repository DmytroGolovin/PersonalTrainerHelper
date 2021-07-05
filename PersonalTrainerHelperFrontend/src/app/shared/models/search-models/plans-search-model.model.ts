import { BaseSearchModel } from "./base-search-model.model";

export class PlansSearchModel extends BaseSearchModel{
    personalTrainerId: string;
    searchExpression: string;
}