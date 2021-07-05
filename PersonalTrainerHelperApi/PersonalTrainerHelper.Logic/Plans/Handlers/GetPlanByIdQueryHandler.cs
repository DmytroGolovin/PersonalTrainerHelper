using AutoMapper;
using MediatR;
using PersonalTrainerHelper.DataAccess.Interfaces;
using PersonalTrainerHelper.Logic.Plans.Dto;
using PersonalTrainerHelper.Logic.Plans.Queries;
using System.Threading;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Logic.Plans.Handlers
{
    public class GetPlanByIdQueryHandler : IRequestHandler<GetPlanByIdQuery, PlanDto>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public GetPlanByIdQueryHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<PlanDto> Handle(GetPlanByIdQuery request, CancellationToken cancellationToken)
        {
            var result = await _unitOfWork.Plans.Get(request.Id);
            return _mapper.Map<PlanDto>(result);
        }
    }
}
