import { BaseSearchModel } from "./base-search-model.model";

export class ExercisesSearchModel extends BaseSearchModel{
    personalTrainerId: string;
    searchExpression: string;
}