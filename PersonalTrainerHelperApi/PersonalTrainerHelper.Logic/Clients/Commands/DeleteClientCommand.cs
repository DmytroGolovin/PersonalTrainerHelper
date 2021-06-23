using MediatR;

namespace PersonalTrainerHelper.Logic.Clients.Commands
{
    public class DeleteClientCommand : IRequest<int>
    {
        public int Id { get; set; }
    }
}
