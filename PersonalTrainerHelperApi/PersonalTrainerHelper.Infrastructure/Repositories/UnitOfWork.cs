using PersonalTrainerHelper.DataAccess.Interfaces;

namespace PersonalTrainerHelper.Infrastructure.Repositories
{
    class UnitOfWork : IUnitOfWork
    {
        public UnitOfWork(
            IClientRepository clientRepository, 
            IExerciseRepository exerciseRepository)
        {
            Clients = clientRepository;
            Exercises = exerciseRepository;
        }

        public IClientRepository Clients { get; }
        public IExerciseRepository Exercises { get; }
    }
}
