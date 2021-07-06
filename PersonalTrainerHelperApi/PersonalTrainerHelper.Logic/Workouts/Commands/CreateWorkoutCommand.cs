using MediatR;
using PersonalTrainerHelper.Core.Entities;
using System.Collections.Generic;

namespace PersonalTrainerHelper.Logic.Workouts.Commands
{
    public class CreateWorkoutCommand : IRequest<int>
    {
        public string PersonalTrainerId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public List<WorkoutExercise> Exercises { get; set; } = new List<WorkoutExercise>();
    }
}
