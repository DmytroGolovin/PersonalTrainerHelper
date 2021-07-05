using MediatR;
using PersonalTrainerHelper.DataAccess.Interfaces;
using PersonalTrainerHelper.Logic.Plans.Commands;
using System.Threading;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Logic.Plans.Handlers
{
    public class DeletePlanCommandHandler : IRequestHandler<DeletePlanCommand, int>
    {
        private readonly IUnitOfWork _unitOfWork;

        public DeletePlanCommandHandler(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<int> Handle(DeletePlanCommand request, CancellationToken cancellationToken)
        {
            var result = await _unitOfWork.Plans.Delete(request.Id);
            return result;
        }
    }
}
