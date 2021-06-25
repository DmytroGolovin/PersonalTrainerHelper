namespace PersonalTrainerHelper.Infrastructure.Repositories.Queries
{
    internal class ClientQueries
    {
        public const string InsertQuery = @"
            INSERT INTO Clients 
                (PersonalTrainerId, 
                FirstName, 
                LastName, 
                Email, 
                Goals)
            VALUES 
                (@PersonalTrainerId, 
                @FirstName, 
                @LastName, 
                @Email, 
                @Goals)";

        public const string UpdateQuery = @"
            UPDATE 
                Clients 
            SET
                FirstName = @FirstName,
                LastName = @LastName,
                Goals = @Goals;
            WHERE
                Id = @Id";

        public const string DeleteQuery = @"
            DELETE FROM
                Clients
            WHERE
                Id = @Id;";

        public const string SelectByIdQuery = @"
            SELECT 
                * 
            FROM 
                Clients 
            WHERE 
                Id = @Id;";

        public const string SelectWithFiltersQuery = @"
            SELECT 
                * 
            FROM 
                Clients 
            WHERE 
                PersonalTrainerId = @PersonalTrainerId
            AND
                (
                    LOWER(FirstName) like '%' + LOWER(@SearchExpression) + '%'
                OR
                    LOWER(LastName) like '%' + LOWER(@SearchExpression) + '%'
                OR
                    LOWER(Email) like '%' + LOWER(@SearchExpression) + '%'
                OR
                    @SearchExpression IS NULL
                )
            ;";
    }
}
