using MediatR;
using PersonalTrainerHelper.Core.Responses;
using PersonalTrainerHelper.Logic.Workouts.Dto;

namespace PersonalTrainerHelper.Logic.Workouts.Queries
{
    public class GetWorkoutsWithFiltersQuery : IRequest<PaginatedResponse<WorkoutDto>>
    {
        public string PersonalTrainerId { get; set; }
        public string SearchExpression { get; set; }
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
    }
}
