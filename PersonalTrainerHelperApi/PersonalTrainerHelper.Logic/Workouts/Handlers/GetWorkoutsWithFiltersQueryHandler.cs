using AutoMapper;
using MediatR;
using PersonalTrainerHelper.Core.Responses;
using PersonalTrainerHelper.Core.SearchModels;
using PersonalTrainerHelper.DataAccess.Interfaces;
using PersonalTrainerHelper.Logic.Workouts.Dto;
using PersonalTrainerHelper.Logic.Workouts.Queries;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Logic.Workouts.Handlers
{

    public class GetWorkoutsWithFiltersQueryHandler : IRequestHandler<GetWorkoutsWithFiltersQuery, PaginatedResponse<WorkoutDto>>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public GetWorkoutsWithFiltersQueryHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<PaginatedResponse<WorkoutDto>> Handle(GetWorkoutsWithFiltersQuery request, CancellationToken cancellationToken)
        {
            var result = await _unitOfWork.Workouts.GetWithFilters(_mapper.Map<WorkoutsSearchModel>(request));

            return new PaginatedResponse<WorkoutDto>
            {
                TotalItems = result.TotalItems,
                Items = _mapper.Map<List<WorkoutDto>>(result.Items),
            };
        }
    }
}
