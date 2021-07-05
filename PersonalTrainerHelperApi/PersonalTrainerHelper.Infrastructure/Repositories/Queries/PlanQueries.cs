namespace PersonalTrainerHelper.Infrastructure.Repositories.Queries
{
    internal class PlanQueries
    {
        public const string InsertQuery = @"
            INSERT INTO Plans 
                (PersonalTrainerId, 
                Title, 
                Description)
            VALUES 
                (@PersonalTrainerId, 
                @Title, 
                @Description)";

        public const string UpdateQuery = @"
            UPDATE 
                Plans 
            SET
                Title = @Title,
                Description = @Description
            WHERE
                Id = @Id";

        public const string DeleteQuery = @"
            DELETE FROM
                Plans
            WHERE
                Id = @Id;";

        public const string SelectByIdQuery = @"
            SELECT 
                * 
            FROM 
                Plans 
            WHERE 
                Id = @Id;";

        public const string SelectWithFiltersQuery = @"
            SELECT 
                * 
            FROM 
                Plans 
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
