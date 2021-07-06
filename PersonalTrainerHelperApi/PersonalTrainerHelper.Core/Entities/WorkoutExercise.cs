namespace PersonalTrainerHelper.Core.Entities
{
    public class WorkoutExercise
    {
        public int Id { get; set; }
        public int WorkoutId { get; set; }
        public int ExerciseId { get; set; }

        public int Order { get; set; }

        public int Quantity { get; set; }
        public int MinRep { get; set; }
        public int MaxRep { get; set; }

        public string Observations { get; set; }

        public Exercise Exercise { get; set; }
    }
}
