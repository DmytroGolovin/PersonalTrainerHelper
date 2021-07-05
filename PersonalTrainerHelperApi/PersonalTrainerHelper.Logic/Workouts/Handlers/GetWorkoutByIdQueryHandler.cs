using AutoMapper;
using MediatR;
using PersonalTrainerHelper.DataAccess.Interfaces;
using PersonalTrainerHelper.Logic.Workouts.Dto;
using PersonalTrainerHelper.Logic.Workouts.Queries;
using System.Threading;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Logic.Workouts.Handlers
{
    public class GetWorkoutByIdQueryHandler : IRequestHandler<GetWorkoutByIdQuery, WorkoutDto>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public GetWorkoutByIdQueryHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<WorkoutDto> Handle(GetWorkoutByIdQuery request, CancellationToken cancellationToken)
        {
            var result = await _unitOfWork.Workouts.Get(request.Id);
            return _mapper.Map<WorkoutDto>(result);
        }
    }
}
