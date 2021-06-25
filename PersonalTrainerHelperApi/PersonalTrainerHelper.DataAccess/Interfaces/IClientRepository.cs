using PersonalTrainerHelper.Core.Entities;
using PersonalTrainerHelper.Core.Responses;
using PersonalTrainerHelper.Core.SearchModels;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.DataAccess.Interfaces
{
    public interface IClientRepository: IGenericRepository<Client>
    {
        Task<PaginatedResponse<Client>> GetWithFilters(ClientsSearchModel searchModel);
    }
}
