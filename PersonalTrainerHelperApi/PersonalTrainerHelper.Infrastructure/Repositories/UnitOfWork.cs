using PersonalTrainerHelper.DataAccess.Interfaces;

namespace PersonalTrainerHelper.Infrastructure.Repositories
{
    class UnitOfWork : IUnitOfWork
    {
        public UnitOfWork(
            IClientRepository clientRepository, 
            IExerciseRepository exerciseRepository,
            IWorkoutRepository workoutRepository,
            IPlanRepository planRepository
            )
        {
            Clients = clientRepository;
            Exercises = exerciseRepository;
            Plans = planRepository;
            Workouts = workoutRepository;
        }

        public IClientRepository Clients { get; }
        public IExerciseRepository Exercises { get; }
        public IWorkoutRepository Workouts { get; }
        public IPlanRepository Plans { get; }
    }
}
