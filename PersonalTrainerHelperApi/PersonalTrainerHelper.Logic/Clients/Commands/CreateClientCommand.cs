using MediatR;

namespace PersonalTrainerHelper.Logic.Clients.Commands
{
    public class CreateClientCommand : IRequest<int>
    {
        public string PersonalTrainerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Goals { get; set; }
    }
}
