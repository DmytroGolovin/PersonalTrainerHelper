using PersonalTrainerHelper.Core.Entities;
using PersonalTrainerHelper.Core.Responses;
using PersonalTrainerHelper.Core.SearchModels;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.DataAccess.Interfaces
{
    public interface IWorkoutRepository : IGenericRepository<Workout>
    {
        Task<PaginatedResponse<Workout>> GetWithFilters(WorkoutsSearchModel searchModel);
    }
}
