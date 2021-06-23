using Dapper;
using Microsoft.Extensions.Configuration;
using PersonalTrainerHelper.Core.Entities;
using PersonalTrainerHelper.Core.Responses;
using PersonalTrainerHelper.Core.SearchModels;
using PersonalTrainerHelper.DataAccess.Interfaces;
using System.Collections.Generic;
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

        public async Task<int> Add(Client entity)
        {
            var sql = "INSERT INTO " +
                      "Clients (PersonalTrainerId, FirstName, LastName, Email, Goals) " +
                      "VALUES (@PersonalTrainerId, @FirstName, @LastName, @Email, @Goals)";
            using(var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                connection.Open();
                var affectedRows = await connection.ExecuteAsync(sql, entity);
                return affectedRows;
            }
        }

        public async Task<int> Delete(int id)
        {
            var sql = "DELETE FROM Clients WHERE Id = @Id";
            using (var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                connection.Open();
                var affectedRows = await connection.ExecuteAsync(sql, new { Id = id });
                return affectedRows;
            }
        }

        public async Task<Client> Get(int id)
        {
            var sql = "SELECT * FROM Clients WHERE Id = @Id";
            using (var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                connection.Open();
                var result = await connection.QueryAsync<Client>(sql, new { Id = id });
                return result.FirstOrDefault();
            }
        }

        public async Task<PaginatedResponse<Client>> GetAll(ClientsSearchModel searchModel)
        {
            var sql = "SELECT * FROM Clients WHERE PersonalTrainerId = @PersonalTrainerId";
            using (var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                connection.Open();
                var result = await connection.QueryAsync<Client>(sql, new { searchModel.PersonalTrainerId });
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

        public async Task<int> Update(Client entity)
        {
            var sql = "UPDATE" +
                      "Clients SET FirstName = @FirstName, LastName = @LastName, Goals = @Goals, PlanId = @PlanId" +
                      "WHERE Id = @Id";
            using (var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                connection.Open();
                var affectedRows = await connection.ExecuteAsync(sql, entity);
                return affectedRows;
            }
        }
    }
}
