using MediatR;

namespace PersonalTrainerHelper.Logic.Clients.Commands
{
    public class UpdateClientCommand : IRequest<int>
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Goals { get; set; }
    }
}
