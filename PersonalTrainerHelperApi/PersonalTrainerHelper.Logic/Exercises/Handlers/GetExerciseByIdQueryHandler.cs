using AutoMapper;
using MediatR;
using PersonalTrainerHelper.DataAccess.Interfaces;
using PersonalTrainerHelper.Logic.Exercises.Dto;
using PersonalTrainerHelper.Logic.Exercises.Queries;
using System.Threading;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Logic.Exercises.Handlers
{
    public class GetExerciseByIdQueryHandler : IRequestHandler<GetExerciseByIdQuery, ExerciseDto>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public GetExerciseByIdQueryHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<ExerciseDto> Handle(GetExerciseByIdQuery request, CancellationToken cancellationToken)
        {
            var result = await _unitOfWork.Exercises.Get(request.Id);
            return _mapper.Map<ExerciseDto>(result);
        }
    }
}
