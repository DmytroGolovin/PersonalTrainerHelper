using AutoMapper;
using MediatR;
using PersonalTrainerHelper.Core.Entities;
using PersonalTrainerHelper.DataAccess.Interfaces;
using PersonalTrainerHelper.Logic.Workouts.Commands;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Logic.Workouts.Handlers
{
    public class CreateWorkoutCommandHandler : IRequestHandler<CreateWorkoutCommand, int>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public CreateWorkoutCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<int> Handle(CreateWorkoutCommand request, CancellationToken cancellationToken)
        {
            var result = await _unitOfWork.Workouts.Add(_mapper.Map<Workout>(request));
            return result;
        }
    }
}
