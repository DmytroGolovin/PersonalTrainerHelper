using MediatR;

namespace PersonalTrainerHelper.Logic.Workouts.Commands
{
    public class DeleteWorkoutCommand : IRequest<int>
    {
        public int Id { get; set; }
    }
}
