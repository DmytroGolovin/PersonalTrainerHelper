using FluentValidation;
using PersonalTrainerHelper.Logic.Workouts.Commands;

namespace PersonalTrainerHelper.Logic.Workouts.Validators
{
    public class UpdateWorkoutCommandValidator : AbstractValidator<UpdateWorkoutCommand>
    {
        public UpdateWorkoutCommandValidator()
        {
            RuleFor(x => x.Id).NotEmpty();
            RuleFor(x => x.Title).NotEmpty();
            RuleFor(x => x.Description).NotEmpty();
        }
    }
}
