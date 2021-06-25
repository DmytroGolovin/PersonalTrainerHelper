using MediatR;

namespace PersonalTrainerHelper.Logic.Exercises.Commands
{
    public class CreateExerciseCommand : IRequest<int>
    {
        public string PersonalTrainerId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string VideoURL { get; set; }
    }
}
