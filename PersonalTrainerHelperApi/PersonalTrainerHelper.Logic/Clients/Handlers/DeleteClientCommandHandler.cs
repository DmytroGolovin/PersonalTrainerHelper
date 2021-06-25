using MediatR;
using PersonalTrainerHelper.DataAccess.Interfaces;
using PersonalTrainerHelper.Logic.Clients.Commands;
using System.Threading;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Logic.Clients.Handlers
{
    public class DeleteClientCommandHandler : IRequestHandler<DeleteClientCommand, int>
    {
        private readonly IUnitOfWork _unitOfWork;

        public DeleteClientCommandHandler(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<int> Handle(DeleteClientCommand request, CancellationToken cancellationToken)
        {
            var result = await _unitOfWork.Clients.Delete(request.Id);
            return result;
        }
    }
}
