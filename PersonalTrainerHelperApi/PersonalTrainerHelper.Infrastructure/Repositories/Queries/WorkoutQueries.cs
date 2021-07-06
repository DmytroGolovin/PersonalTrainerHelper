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
                @Description);
            SELECT SCOPE_IDENTITY();";

        public const string InsertWorkoutExerciseQuery = @"
            INSERT INTO WorkoutExercises
                ([WorkoutId], 
                [ExerciseId], 
                [Quantity], 
                [MinRep], 
                [MaxRep], 
                [Order], 
                [Observations])
            VALUES 
                (@WorkoutId, 
                @ExerciseId,  
                @Quantity, 
                @MinRep, 
                @MaxRep, 
                @Order, 
                @Observations);";

        public const string UpdateQuery = @"
            UPDATE 
                Workouts 
            SET
                Title = @Title,
                Description = @Description
            WHERE
                Id = @Id";

        public const string DeleteWorkoutExercisesQuery = @"
            DELETE FROM
                WorkoutExercises
            WHERE
                WorkoutId = @Id;";

        public const string DeleteQuery = @"
            DELETE FROM
                Workouts
            WHERE
                Id = @Id;";

        public const string SelectByIdQuery = @"
            SELECT 
                [Workouts].*,
                [WorkoutExercises].*,
                [Exercises].*
            FROM 
                [Workouts]
            LEFT JOIN 
                [WorkoutExercises] ON [WorkoutExercises].[WorkoutId] = [Workouts].[Id]
            LEFT JOIN 
                [Exercises] ON [WorkoutExercises].[ExerciseId] = [Exercises].[Id]
            WHERE 
                [Workouts].[Id] = @Id;";

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
