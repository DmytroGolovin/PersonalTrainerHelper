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
    public class ClientRepository : IClientRepository
    {
        private readonly IConfiguration _configuration;
        public ClientRepository(IConfiguration configuration)
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

        public async Task<int> Add(Client entity)
        {
            try
            {
                using (var connection = Connection)
                {
                    connection.Open();
                    var affectedRows = await connection.ExecuteAsync(ClientQueries.InsertQuery, entity);
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
                    var affectedRows = await connection.ExecuteAsync(ClientQueries.DeleteQuery, new { Id = id });
                    return affectedRows;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<Client> Get(int id)
        {
            try
            {
                using (var connection = Connection)
                {
                    connection.Open();
                    var result = await connection.QueryAsync<Client>(ClientQueries.SelectByIdQuery, new { Id = id });
                    return result.FirstOrDefault();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<PaginatedResponse<Client>> GetWithFilters(ClientsSearchModel searchModel)
        {
            try
            {
                using (var connection = Connection)
                {
                    connection.Open();
                    var result = await connection.QueryAsync<Client>(ClientQueries.SelectWithFiltersQuery, searchModel);
                    var response = new PaginatedResponse<Client>
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

        public async Task<int> Update(Client entity)
        {
            try
            {
                using (var connection = Connection)
                {
                    connection.Open();
                    var affectedRows = await connection.ExecuteAsync(ClientQueries.UpdateQuery, entity);
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
