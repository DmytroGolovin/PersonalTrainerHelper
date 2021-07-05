using AutoMapper;
using MediatR;
using PersonalTrainerHelper.Core.Entities;
using PersonalTrainerHelper.DataAccess.Interfaces;
using PersonalTrainerHelper.Logic.Plans.Commands;
using System.Threading;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Logic.Plans.Handlers
{
    public class UpdatePlanCommandHandler : IRequestHandler<UpdatePlanCommand, int>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public UpdatePlanCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<int> Handle(UpdatePlanCommand request, CancellationToken cancellationToken)
        {
            var result = await _unitOfWork.Plans.Update(_mapper.Map<Plan>(request));
            return result;
        }
    }
}
