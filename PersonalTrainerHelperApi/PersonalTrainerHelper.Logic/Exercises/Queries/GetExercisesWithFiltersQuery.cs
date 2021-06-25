using MediatR;
using PersonalTrainerHelper.Core.Responses;
using PersonalTrainerHelper.Logic.Exercises.Dto;

namespace PersonalTrainerHelper.Logic.Exercises.Queries
{
    public class GetExercisesWithFiltersQuery : IRequest<PaginatedResponse<ExerciseDto>>
    {
        public string PersonalTrainerId { get; set; }
        public string SearchExpression { get; set; }
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
    }
}
