using FluentValidation;
using PersonalTrainerHelper.Logic.Plans.Commands;

namespace PersonalTrainerHelper.Logic.Plans.Validators
{
    public class CreatePlanCommandValidator : AbstractValidator<CreatePlanCommand>
    {
        public CreatePlanCommandValidator()
        {
            RuleFor(x => x.PersonalTrainerId).NotEmpty();
            RuleFor(x => x.Title).NotEmpty();
            RuleFor(x => x.Description).NotEmpty();
        }
    }
}
