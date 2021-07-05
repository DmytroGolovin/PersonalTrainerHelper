using MediatR;
using PersonalTrainerHelper.DataAccess.Interfaces;
using PersonalTrainerHelper.Logic.Workouts.Commands;
using System.Threading;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Logic.Workouts.Handlers
{
    public class DeleteWorkoutCommandHandler : IRequestHandler<DeleteWorkoutCommand, int>
    {
        private readonly IUnitOfWork _unitOfWork;

        public DeleteWorkoutCommandHandler(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<int> Handle(DeleteWorkoutCommand request, CancellationToken cancellationToken)
        {
            var result = await _unitOfWork.Workouts.Delete(request.Id);
            return result;
        }
    }
}
