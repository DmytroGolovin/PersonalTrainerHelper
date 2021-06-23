using MediatR;
using PersonalTrainerHelper.Core.Responses;
using PersonalTrainerHelper.Logic.Clients.Dto;

namespace PersonalTrainerHelper.Logic.Clients.Queries
{
    public class GetAllClientsQuery : IRequest<PaginatedResponse<ClientDto>>
    {
        public string PersonalTrainerId { get; set; }
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
    }
}
