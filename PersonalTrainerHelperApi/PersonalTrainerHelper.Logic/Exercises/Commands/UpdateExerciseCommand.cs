using MediatR;

namespace PersonalTrainerHelper.Logic.Exercises.Commands
{
    public class UpdateExerciseCommand : IRequest<int>
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string VideoURL { get; set; }
    }
}
