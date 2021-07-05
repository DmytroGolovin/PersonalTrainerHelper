using MediatR;

namespace PersonalTrainerHelper.Logic.Workouts.Commands
{
    public class UpdateWorkoutCommand : IRequest<int>
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }
}
