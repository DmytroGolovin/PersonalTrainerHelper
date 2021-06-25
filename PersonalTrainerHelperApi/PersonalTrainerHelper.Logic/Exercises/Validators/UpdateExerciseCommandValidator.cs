using FluentValidation;
using PersonalTrainerHelper.Logic.Exercises.Commands;

namespace PersonalTrainerHelper.Logic.Exercises.Validators
{
    public class UpdateExerciseCommandValidator : AbstractValidator<UpdateExerciseCommand>
    {
        public UpdateExerciseCommandValidator()
        {
            RuleFor(x => x.Id).NotEmpty();
            RuleFor(x => x.Title).NotEmpty();
            RuleFor(x => x.Description).NotEmpty();
            RuleFor(x => x.VideoURL).NotEmpty();
        }
    }
}
