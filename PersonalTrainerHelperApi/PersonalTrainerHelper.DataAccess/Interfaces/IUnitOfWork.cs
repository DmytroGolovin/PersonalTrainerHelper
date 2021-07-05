namespace PersonalTrainerHelper.DataAccess.Interfaces
{
    public interface IUnitOfWork
    {
        IClientRepository Clients { get; }
        IExerciseRepository Exercises { get; }
        IPlanRepository Plans { get; }
        IWorkoutRepository Workouts { get; }
    }
}
