using AutoMapper;
using PersonalTrainerHelper.Core.Entities;
using PersonalTrainerHelper.Core.SearchModels;
using PersonalTrainerHelper.Logic.Exercises.Commands;
using PersonalTrainerHelper.Logic.Exercises.Dto;
using PersonalTrainerHelper.Logic.Exercises.Queries;

namespace PersonalTrainerHelper.Logic.Exercises.MappingProfiles
{
    public class ExerciseMappingProfile : Profile
    {
        public ExerciseMappingProfile()
        {
            CreateMap<CreateExerciseCommand, Exercise>();
            CreateMap<UpdateExerciseCommand, Exercise>();
            CreateMap<GetExercisesWithFiltersQuery, ExerciseSearchModel>();
            CreateMap<Exercise, ExerciseDto>();
        }
    }
}
