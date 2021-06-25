using AutoMapper;
using MediatR;
using PersonalTrainerHelper.Core.Responses;
using PersonalTrainerHelper.Core.SearchModels;
using PersonalTrainerHelper.DataAccess.Interfaces;
using PersonalTrainerHelper.Logic.Clients.Dto;
using PersonalTrainerHelper.Logic.Clients.Queries;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Logic.Clients.Handlers
{
    public class GetClientsWithFiltersQueryHandler : IRequestHandler<GetClientsWithFiltersQuery, PaginatedResponse<ClientDto>>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public GetClientsWithFiltersQueryHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<PaginatedResponse<ClientDto>> Handle(GetClientsWithFiltersQuery request, CancellationToken cancellationToken)
        {
            var result = await _unitOfWork.Clients.GetWithFilters(_mapper.Map<ClientsSearchModel>(request));
            //return _mapper.Map<PaginatedResponse<ClientDto>>(result);

            return new PaginatedResponse<ClientDto>
            {
                TotalItems = result.TotalItems,
                Items = _mapper.Map<List<ClientDto>>(result.Items),
            };
        }
    }
}
