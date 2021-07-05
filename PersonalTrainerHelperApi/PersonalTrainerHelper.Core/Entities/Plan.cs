using System.Collections.Generic;

namespace PersonalTrainerHelper.Core.Entities
{
    public class Plan
    {
        public int Id { get; set; }
        public string PersonalTrainerId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public List<Workout> Workouts { get; set; } = new List<Workout>();
    }
}
