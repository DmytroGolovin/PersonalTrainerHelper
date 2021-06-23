using FluentValidation;
using PersonalTrainerHelper.Logic.Clients.Commands;

namespace PersonalTrainerHelper.Logic.Clients.Validators
{
    public class UpdateClientCommandValidator : AbstractValidator<UpdateClientCommand>
    {
        public UpdateClientCommandValidator()
        {
            RuleFor(x => x.Id).NotEmpty();
            RuleFor(x => x.FirstName).NotEmpty();
            RuleFor(x => x.LastName).NotEmpty();
            RuleFor(x => x.Goals).NotEmpty();
        }
    }
}
