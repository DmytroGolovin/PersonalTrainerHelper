using AutoMapper;
using PersonalTrainerHelper.Core.Entities;
using PersonalTrainerHelper.Core.SearchModels;
using PersonalTrainerHelper.Logic.Clients.Commands;
using PersonalTrainerHelper.Logic.Clients.Dto;
using PersonalTrainerHelper.Logic.Clients.Queries;

namespace PersonalTrainerHelper.Logic.Clients.MappingProfiles
{
    public class ClientMappingProfile : Profile
    {
        public ClientMappingProfile()
        {
            CreateMap<CreateClientCommand, Client>();
            CreateMap<UpdateClientCommand, Client>();
            CreateMap<GetClientsWithFiltersQuery, ClientsSearchModel>();
            CreateMap<Client, ClientDto>();
        }
    }
}
