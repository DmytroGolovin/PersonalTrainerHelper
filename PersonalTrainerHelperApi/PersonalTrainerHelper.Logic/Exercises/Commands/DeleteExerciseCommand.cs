using MediatR;

namespace PersonalTrainerHelper.Logic.Exercises.Commands
{
    public class DeleteExerciseCommand : IRequest<int>
    {
        public int Id { get; set; }
    }
}
