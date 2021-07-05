using FluentValidation;
using PersonalTrainerHelper.Logic.Plans.Commands;

namespace PersonalTrainerHelper.Logic.Plans.Validators
{
    public class UpdatePlanCommandValidator : AbstractValidator<UpdatePlanCommand>
    {
        public UpdatePlanCommandValidator()
        {
            RuleFor(x => x.Id).NotEmpty();
            RuleFor(x => x.Title).NotEmpty();
            RuleFor(x => x.Description).NotEmpty();
        }
    }
}
