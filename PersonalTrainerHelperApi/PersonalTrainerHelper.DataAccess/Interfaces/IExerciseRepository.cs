using PersonalTrainerHelper.Core.Entities;
using PersonalTrainerHelper.Core.Responses;
using PersonalTrainerHelper.Core.SearchModels;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.DataAccess.Interfaces
{
    public interface IExerciseRepository : IGenericRepository<Exercise>
    {
        Task<PaginatedResponse<Exercise>> GetWithFilters(ExerciseSearchModel searchModel);
    }
}
