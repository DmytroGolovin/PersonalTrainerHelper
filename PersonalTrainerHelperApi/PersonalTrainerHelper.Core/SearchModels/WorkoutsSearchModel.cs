namespace PersonalTrainerHelper.Core.SearchModels
{
    public class WorkoutsSearchModel : BaseSearchModel
    {
        public string PersonalTrainerId { get; set; }
        public string SearchExpression { get; set; }
    }
}
