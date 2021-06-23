namespace PersonalTrainerHelper.Core.Entities
{
    public class Client
    {
        public int Id { get; set; }
        public string PersonalTrainerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Goals { get; set; }

        public Plan Plan { get; set; }
    }
}
