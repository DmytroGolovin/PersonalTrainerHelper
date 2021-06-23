using FluentValidation;
using PersonalTrainerHelper.Logic.Clients.Commands;

namespace PersonalTrainerHelper.Logic.Clients.Validators
{
    public class CreateClientCommandValidator : AbstractValidator<CreateClientCommand>
    {
        public CreateClientCommandValidator()
        {
            RuleFor(x => x.PersonalTrainerId).NotEmpty();
            RuleFor(x => x.FirstName).NotEmpty();
            RuleFor(x => x.LastName).NotEmpty();
            RuleFor(x => x.Email).NotEmpty();
            RuleFor(x => x.Goals).NotEmpty();
        }
    }
}
