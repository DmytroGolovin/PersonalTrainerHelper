using FluentValidation;
using PersonalTrainerHelper.Logic.Exercises.Commands;

namespace PersonalTrainerHelper.Logic.Exercises.Validators
{
    public class CreateExerciseCommandValidator : AbstractValidator<CreateExerciseCommand>
    {
        public CreateExerciseCommandValidator()
        {
            RuleFor(x => x.PersonalTrainerId).NotEmpty();
            RuleFor(x => x.Title).NotEmpty();
            RuleFor(x => x.Description).NotEmpty();
            RuleFor(x => x.VideoURL).NotEmpty();
        }
    }
}
