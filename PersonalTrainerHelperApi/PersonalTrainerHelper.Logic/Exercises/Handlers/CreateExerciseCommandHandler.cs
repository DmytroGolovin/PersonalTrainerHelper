using AutoMapper;
using MediatR;
using PersonalTrainerHelper.Core.Entities;
using PersonalTrainerHelper.DataAccess.Interfaces;
using PersonalTrainerHelper.Logic.Exercises.Commands;
using System.Threading;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Logic.Exercises.Handlers
{
    public class CreateExerciseCommandHandler : IRequestHandler<CreateExerciseCommand, int>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public CreateExerciseCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<int> Handle(CreateExerciseCommand request, CancellationToken cancellationToken)
        {
            var result = await _unitOfWork.Exercises.Add(_mapper.Map<Exercise>(request));
            return result;
        }
    }
}
