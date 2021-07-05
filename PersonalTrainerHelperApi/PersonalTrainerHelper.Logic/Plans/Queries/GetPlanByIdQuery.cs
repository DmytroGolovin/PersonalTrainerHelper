using MediatR;
using PersonalTrainerHelper.Logic.Plans.Dto;

namespace PersonalTrainerHelper.Logic.Plans.Queries
{
    public class GetPlanByIdQuery : IRequest<PlanDto>
    {
        public int Id { get; set; }
    }
}
