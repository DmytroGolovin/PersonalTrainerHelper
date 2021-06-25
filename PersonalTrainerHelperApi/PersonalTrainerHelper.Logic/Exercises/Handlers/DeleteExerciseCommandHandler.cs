using MediatR;
using PersonalTrainerHelper.DataAccess.Interfaces;
using PersonalTrainerHelper.Logic.Exercises.Commands;
using System.Threading;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Logic.Exercises.Handlers
{
    public class DeleteExerciseCommandHandler : IRequestHandler<DeleteExerciseCommand, int>
    {
        private readonly IUnitOfWork _unitOfWork;

        public DeleteExerciseCommandHandler(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<int> Handle(DeleteExerciseCommand request, CancellationToken cancellationToken)
        {
            var result = await _unitOfWork.Exercises.Delete(request.Id);
            return result;
        }
    }
}
