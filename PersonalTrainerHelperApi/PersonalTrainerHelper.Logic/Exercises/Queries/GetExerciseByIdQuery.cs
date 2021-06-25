using MediatR;
using PersonalTrainerHelper.Logic.Exercises.Dto;

namespace PersonalTrainerHelper.Logic.Exercises.Queries
{
    public class GetExerciseByIdQuery : IRequest<ExerciseDto>
    {
        public int Id { get; set; }
    }
}
