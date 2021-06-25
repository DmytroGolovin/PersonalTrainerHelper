namespace PersonalTrainerHelper.Core.SearchModels
{
    public class ExerciseSearchModel : BaseSearchModel
    {
        public string PersonalTrainerId { get; set; }
        public string SearchExpression { get; set; }
    }
}
