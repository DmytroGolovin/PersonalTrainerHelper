namespace PersonalTrainerHelper.Infrastructure.Repositories.Queries
{
    internal class ExerciseQueries
    {
        public const string InsertQuery = @"
            INSERT INTO Exercises 
                (PersonalTrainerId, 
                Title, 
                Description, 
                VideoURL)
            VALUES 
                (@PersonalTrainerId, 
                @Title, 
                @Description, 
                @VideoURL)";

        public const string UpdateQuery = @"
            UPDATE 
                Exercises 
            SET
                Title = @Title,
                Description = @Description,
                VideoURL = @VideoURL;
            WHERE
                Id = @Id";

        public const string DeleteQuery = @"
            DELETE FROM
                Exercises
            WHERE
                Id = @Id;";

        public const string SelectByIdQuery = @"
            SELECT 
                * 
            FROM 
                Exercises 
            WHERE 
                Id = @Id;";

        public const string SelectWithFiltersQuery = @"
            SELECT 
                * 
            FROM 
                Exercises 
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
