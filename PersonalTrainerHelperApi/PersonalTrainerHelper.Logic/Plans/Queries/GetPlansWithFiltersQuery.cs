using MediatR;
using PersonalTrainerHelper.Core.Responses;
using PersonalTrainerHelper.Logic.Plans.Dto;

namespace PersonalTrainerHelper.Logic.Plans.Queries
{
    public class GetPlansWithFiltersQuery : IRequest<PaginatedResponse<PlanDto>>
    {
        public string PersonalTrainerId { get; set; }
        public string SearchExpression { get; set; }
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
    }
}
