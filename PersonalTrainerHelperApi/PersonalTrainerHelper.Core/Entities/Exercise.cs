namespace PersonalTrainerHelper.Core.Entities
{
    public class Exercise
    {
        public int Id { get; set; }
        public string PersonalTrainerId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string VideoStorageId { get; set; }
        public string VideoURL { get; set; }
    }
}
