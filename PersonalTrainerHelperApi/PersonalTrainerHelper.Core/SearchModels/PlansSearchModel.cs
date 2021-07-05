namespace PersonalTrainerHelper.Core.SearchModels
{
    public class PlansSearchModel : BaseSearchModel
    {
        public string PersonalTrainerId { get; set; }
        public string SearchExpression { get; set; }
    }
}
