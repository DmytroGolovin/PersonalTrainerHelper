using MediatR;

namespace PersonalTrainerHelper.Logic.Workouts.Commands
{
    public class CreateWorkoutCommand : IRequest<int>
    {
        public string PersonalTrainerId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }
}
