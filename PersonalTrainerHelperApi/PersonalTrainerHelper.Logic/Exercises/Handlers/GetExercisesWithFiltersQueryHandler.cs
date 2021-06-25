using AutoMapper;
using MediatR;
using PersonalTrainerHelper.Core.Responses;
using PersonalTrainerHelper.Core.SearchModels;
using PersonalTrainerHelper.DataAccess.Interfaces;
using PersonalTrainerHelper.Logic.Exercises.Dto;
using PersonalTrainerHelper.Logic.Exercises.Queries;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Logic.Exercises.Handlers
{
    public class GetExercisesWithFiltersQueryHandler : IRequestHandler<GetExercisesWithFiltersQuery, PaginatedResponse<ExerciseDto>>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public GetExercisesWithFiltersQueryHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<PaginatedResponse<ExerciseDto>> Handle(GetExercisesWithFiltersQuery request, CancellationToken cancellationToken)
        {
            var result = await _unitOfWork.Exercises.GetWithFilters(_mapper.Map<ExerciseSearchModel>(request));
            //return _mapper.Map<PaginatedResponse<ClientDto>>(result);

            return new PaginatedResponse<ExerciseDto>
            {
                TotalItems = result.TotalItems,
                Items = _mapper.Map<List<ExerciseDto>>(result.Items),
            };
        }
    }
}
