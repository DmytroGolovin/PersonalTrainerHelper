﻿using System.Collections.Generic;

namespace PersonalTrainerHelper.Core.Entities
{
    public class Workout
    {
        public int Id { get; set; }
        public string PersonalTrainerId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public List<Exercise> Exercises { get; set; } = new List<Exercise>();
    }
}
