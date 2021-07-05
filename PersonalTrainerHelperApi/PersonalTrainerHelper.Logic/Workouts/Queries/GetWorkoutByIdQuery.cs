using MediatR;
using PersonalTrainerHelper.Logic.Workouts.Dto;

namespace PersonalTrainerHelper.Logic.Workouts.Queries
{
    public class GetWorkoutByIdQuery : IRequest<WorkoutDto>
    {
        public int Id { get; set; }
    }
}
