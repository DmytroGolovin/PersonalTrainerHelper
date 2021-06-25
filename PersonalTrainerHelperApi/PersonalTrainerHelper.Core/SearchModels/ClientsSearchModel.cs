namespace PersonalTrainerHelper.Core.SearchModels
{
    public class ClientsSearchModel : BaseSearchModel
    {
        public string PersonalTrainerId { get; set; }
        public string SearchExpression { get; set; }
    }
}
