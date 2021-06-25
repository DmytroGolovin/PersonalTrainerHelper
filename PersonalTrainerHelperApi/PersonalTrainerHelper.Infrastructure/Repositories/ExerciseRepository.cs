using Dapper;
using Microsoft.Extensions.Configuration;
using PersonalTrainerHelper.Core.Entities;
using PersonalTrainerHelper.Core.Responses;
using PersonalTrainerHelper.Core.SearchModels;
using PersonalTrainerHelper.DataAccess.Interfaces;
using PersonalTrainerHelper.Infrastructure.Repositories.Queries;
using System;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Infrastructure.Repositories
{
    public class ExerciseRepository : IExerciseRepository
    {
        private readonly IConfiguration _configuration;
        public ExerciseRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        IDbConnection Connection
        {
            get
            {
                return new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            }
        }

        public async Task<int> Add(Exercise entity)
        {
            try
            {
                using (var connection = Connection)
                {
                    connection.Open();
                    var affectedRows = await connection.ExecuteAsync(ExerciseQueries.InsertQuery, entity);
                    return affectedRows;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task<int> Delete(int id)
        {
            try
            {
                using (var connection = Connection)
                {
                    connection.Open();
                    var affectedRows = await connection.ExecuteAsync(ExerciseQueries.DeleteQuery, new { Id = id });
                    return affectedRows;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<Exercise> Get(int id)
        {
            try
            {
                using (var connection = Connection)
                {
                    connection.Open();
                    var result = await connection.QueryAsync<Exercise>(ExerciseQueries.SelectByIdQuery, new { Id = id });
                    return result.FirstOrDefault();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<PaginatedResponse<Exercise>> GetWithFilters(ExerciseSearchModel searchModel)
        {
            try
            {
                using (var connection = Connection)
                {
                    connection.Open();
                    var result = await connection.QueryAsync<Exercise>(ExerciseQueries.SelectWithFiltersQuery, searchModel);
                    var response = new PaginatedResponse<Exercise>
                    {
                        TotalItems = result.Count(),
                        Items = result.Distinct()
                        .Skip((int)((searchModel.PageNumber - 1) * searchModel.PageSize))
                        .Take((int)searchModel.PageSize).ToList()
                    };

                    return response;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<int> Update(Exercise entity)
        {
            try
            {
                using (var connection = Connection)
                {
                    connection.Open();
                    var affectedRows = await connection.ExecuteAsync(ExerciseQueries.UpdateQuery, entity);
                    return affectedRows;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
