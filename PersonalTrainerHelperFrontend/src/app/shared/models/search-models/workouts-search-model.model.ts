import { BaseSearchModel } from "./base-search-model.model";

export class WorkoutsSearchModel extends BaseSearchModel{
    personalTrainerId: string;
    searchExpression: string;
}