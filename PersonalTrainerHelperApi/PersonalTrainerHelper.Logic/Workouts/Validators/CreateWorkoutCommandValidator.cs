using FluentValidation;
using PersonalTrainerHelper.Logic.Workouts.Commands;

namespace PersonalTrainerHelper.Logic.Workouts.Validators
{
    public class CreateWorkoutCommandValidator : AbstractValidator<CreateWorkoutCommand>
    {
        public CreateWorkoutCommandValidator()
        {
            RuleFor(x => x.PersonalTrainerId).NotEmpty();
            RuleFor(x => x.Title).NotEmpty();
            RuleFor(x => x.Description).NotEmpty();
        }
    }
}
