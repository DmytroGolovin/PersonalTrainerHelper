using AutoMapper;
using PersonalTrainerHelper.Core.Entities;
using PersonalTrainerHelper.Core.SearchModels;
using PersonalTrainerHelper.Logic.Plans.Commands;
using PersonalTrainerHelper.Logic.Plans.Dto;
using PersonalTrainerHelper.Logic.Plans.Queries;

namespace PersonalTrainerHelper.Logic.Plans.MappingProfiles
{
    public class PlanMappingProfile : Profile
    {
        public PlanMappingProfile()
        {
            CreateMap<CreatePlanCommand, Plan>();
            CreateMap<UpdatePlanCommand, Plan>();
            CreateMap<GetPlansWithFiltersQuery, PlansSearchModel>();
            CreateMap<Plan, PlanDto>();
        }
    }
}
