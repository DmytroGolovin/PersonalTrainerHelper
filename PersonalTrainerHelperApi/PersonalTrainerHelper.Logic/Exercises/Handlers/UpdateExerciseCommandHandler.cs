using AutoMapper;
using MediatR;
using PersonalTrainerHelper.Core.Entities;
using PersonalTrainerHelper.DataAccess.Interfaces;
using PersonalTrainerHelper.Logic.Exercises.Commands;
using System.Threading;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Logic.Exercises.Handlers
{
    public class UpdateExerciseCommandHandler : IRequestHandler<UpdateExerciseCommand, int>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public UpdateExerciseCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<int> Handle(UpdateExerciseCommand request, CancellationToken cancellationToken)
        {
            var result = await _unitOfWork.Exercises.Update(_mapper.Map<Exercise>(request));
            return result;
        }
    }
}
