using MediatR;
using PersonalTrainerHelper.Logic.Clients.Dto;

namespace PersonalTrainerHelper.Logic.Clients.Queries
{
    public class GetClientByIdQuery : IRequest<ClientDto>
    {
        public int Id { get; set; }
    }
}
