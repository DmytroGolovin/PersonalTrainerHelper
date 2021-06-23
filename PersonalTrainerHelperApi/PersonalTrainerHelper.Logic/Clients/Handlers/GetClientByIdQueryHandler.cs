using AutoMapper;
using MediatR;
using PersonalTrainerHelper.DataAccess.Interfaces;
using PersonalTrainerHelper.Logic.Clients.Dto;
using PersonalTrainerHelper.Logic.Clients.Queries;
using System.Threading;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Logic.Clients.Handlers
{
    public class GetClientByIdQueryHandler : IRequestHandler<GetClientByIdQuery, ClientDto>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public GetClientByIdQueryHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<ClientDto> Handle(GetClientByIdQuery request, CancellationToken cancellationToken)
        {
            var result = await _unitOfWork.Clients.Get(request.Id);
            return _mapper.Map<ClientDto>(result);
        }
    }
}
