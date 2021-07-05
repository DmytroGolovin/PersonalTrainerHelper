using AutoMapper;
using MediatR;
using PersonalTrainerHelper.Core.Entities;
using PersonalTrainerHelper.DataAccess.Interfaces;
using PersonalTrainerHelper.Logic.Plans.Commands;
using System.Threading;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Logic.Plans.Handlers
{
    public class CreatePlanCommandHandler : IRequestHandler<CreatePlanCommand, int>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public CreatePlanCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<int> Handle(CreatePlanCommand request, CancellationToken cancellationToken)
        {
            var result = await _unitOfWork.Plans.Add(_mapper.Map<Plan>(request));
            return result;
        }
    }
}
