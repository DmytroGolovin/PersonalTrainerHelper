using Dapper;
using Microsoft.Extensions.Configuration;
using PersonalTrainerHelper.Core.Entities;
using PersonalTrainerHelper.Core.Responses;
using PersonalTrainerHelper.Core.SearchModels;
using PersonalTrainerHelper.DataAccess.Interfaces;
using PersonalTrainerHelper.Infrastructure.Repositories.Queries;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Infrastructure.Repositories
{
    public class WorkoutRepository : IWorkoutRepository
    {
        private readonly IConfiguration _configuration;
        public WorkoutRepository(IConfiguration configuration)
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

        public async Task<int> Add(Workout entity)
        {
            try
            {
                using (var connection = Connection)
                {
                    connection.Open();
                    var workoutId = await connection.QueryFirstOrDefaultAsync<int>(WorkoutQueries.InsertQuery, entity);

                    if (entity.Exercises.Any())
                    {
                        int order = 1;
                        foreach(var exercise in entity.Exercises)
                        {
                            exercise.WorkoutId = workoutId;
                            exercise.Order = order;
                            var affectedRows = await connection.ExecuteAsync(WorkoutQueries.InsertWorkoutExerciseQuery, exercise);
                            order++;
                        }
                    }
                    return workoutId;
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
                    await connection.ExecuteAsync(WorkoutQueries.DeleteWorkoutExercisesQuery, new { Id = id });
                    var affectedRows = await connection.ExecuteAsync(WorkoutQueries.DeleteQuery, new { Id = id });
                    return affectedRows;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<Workout> Get(int id)
        {
            try
            {
                using (var connection = Connection)
                {
                    connection.Open();
                    var workoutDictionary = new Dictionary<long, Workout>();
                    var result = await connection.QueryAsync<Workout, WorkoutExercise, Exercise, Workout>(
                        WorkoutQueries.SelectByIdQuery,
                        (workout, workoutExercise, exercise) => 
                        {
                            Workout workoutEntry;

                            if (!workoutDictionary.TryGetValue(workout.Id, out workoutEntry))
                            {
                                workoutEntry = workout;
                                workoutDictionary.Add(workout.Id, workoutEntry);
                            }

                            if (workoutExercise != null)
                            {
                                if (exercise != null)
                                {
                                    workoutExercise.Exercise = exercise;
                                }

                                workoutEntry.Exercises.Add(workoutExercise);
                            }

                            return workoutEntry;
                        }, new { Id = id }, splitOn: "Id");

                    return result.FirstOrDefault();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<PaginatedResponse<Workout>> GetWithFilters(WorkoutsSearchModel searchModel)
        {
            try
            {
                using (var connection = Connection)
                {
                    connection.Open();
                    var result = await connection.QueryAsync<Workout>(WorkoutQueries.SelectWithFiltersQuery, searchModel);
                    var response = new PaginatedResponse<Workout>
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

        public async Task<int> Update(Workout entity)
        {
            try
            {
                using (var connection = Connection)
                {
                    connection.Open();
                    var affectedRows = await connection.ExecuteAsync(WorkoutQueries.UpdateQuery, entity);
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
