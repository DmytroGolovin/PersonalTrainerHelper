using AutoMapper;
using PersonalTrainerHelper.Core.Entities;
using PersonalTrainerHelper.Core.SearchModels;
using PersonalTrainerHelper.Logic.Workouts.Commands;
using PersonalTrainerHelper.Logic.Workouts.Dto;
using PersonalTrainerHelper.Logic.Workouts.Queries;

namespace PersonalTrainerHelper.Logic.Workouts.MappingProfiles
{
    public class WorkoutMappingProfile : Profile
    {
        public WorkoutMappingProfile()
        {
            CreateMap<CreateWorkoutCommand, Workout>();
            CreateMap<UpdateWorkoutCommand, Workout>();
            CreateMap<GetWorkoutsWithFiltersQuery, WorkoutsSearchModel>();
            CreateMap<Workout, WorkoutDto>();
        }
    }
}
