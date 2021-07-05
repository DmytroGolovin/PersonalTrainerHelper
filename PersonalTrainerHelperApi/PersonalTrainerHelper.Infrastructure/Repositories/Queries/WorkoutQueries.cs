namespace PersonalTrainerHelper.Infrastructure.Repositories.Queries
{
    internal class WorkoutQueries
    {
        public const string InsertQuery = @"
            INSERT INTO Workouts 
                (PersonalTrainerId, 
                Title, 
                Description)
            VALUES 
                (@PersonalTrainerId, 
                @Title, 
                @Description)";

        public const string UpdateQuery = @"
            UPDATE 
                Workouts 
            SET
                Title = @Title,
                Description = @Description
            WHERE
                Id = @Id";

        public const string DeleteQuery = @"
            DELETE FROM
                Workouts
            WHERE
                Id = @Id;";

        public const string SelectByIdQuery = @"
            SELECT 
                * 
            FROM 
                Workouts 
            WHERE 
                Id = @Id;";

        public const string SelectWithFiltersQuery = @"
            SELECT 
                * 
            FROM 
                Workouts 
            WHERE 
                PersonalTrainerId = @PersonalTrainerId
            AND
                (
                    LOWER(Title) like '%' + LOWER(@SearchExpression) + '%'
                OR
                    LOWER(Description) like '%' + LOWER(@SearchExpression) + '%'
                OR
                    @SearchExpression IS NULL
                )
            ;";
    }
}
