using PersonalTrainerHelper.Core.Entities;
using PersonalTrainerHelper.Core.Responses;
using PersonalTrainerHelper.Core.SearchModels;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.DataAccess.Interfaces
{
    public interface IPlanRepository : IGenericRepository<Plan>
    {
        Task<PaginatedResponse<Plan>> GetWithFilters(PlansSearchModel searchModel);
    }
}
