using AutoMapper;
using MediatR;
using PersonalTrainerHelper.Core.Responses;
using PersonalTrainerHelper.Core.SearchModels;
using PersonalTrainerHelper.DataAccess.Interfaces;
using PersonalTrainerHelper.Logic.Plans.Dto;
using PersonalTrainerHelper.Logic.Plans.Queries;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Logic.Plans.Handlers
{
    public class GetPlansWithFiltersQueryHandler : IRequestHandler<GetPlansWithFiltersQuery, PaginatedResponse<PlanDto>>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public GetPlansWithFiltersQueryHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<PaginatedResponse<PlanDto>> Handle(GetPlansWithFiltersQuery request, CancellationToken cancellationToken)
        {
            var result = await _unitOfWork.Plans.GetWithFilters(_mapper.Map<PlansSearchModel>(request));

            return new PaginatedResponse<PlanDto>
            {
                TotalItems = result.TotalItems,
                Items = _mapper.Map<List<PlanDto>>(result.Items),
            };
        }
    }
}
