using AutoMapper;
using MediatR;
using PersonalTrainerHelper.Core.Entities;
using PersonalTrainerHelper.DataAccess.Interfaces;
using PersonalTrainerHelper.Logic.Workouts.Commands;
using System.Threading;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Logic.Workouts.Handlers
{
    public class UpdateWorkoutCommandHandler : IRequestHandler<UpdateWorkoutCommand, int>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public UpdateWorkoutCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<int> Handle(UpdateWorkoutCommand request, CancellationToken cancellationToken)
        {
            var result = await _unitOfWork.Workouts.Update(_mapper.Map<Workout>(request));
            return result;
        }
    }
}
