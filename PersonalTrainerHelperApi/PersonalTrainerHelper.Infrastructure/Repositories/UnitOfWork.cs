using PersonalTrainerHelper.DataAccess.Interfaces;

namespace PersonalTrainerHelper.Infrastructure.Repositories
{
    class UnitOfWork : IUnitOfWork
    {
        public UnitOfWork(IClientRepository clientRepository)
        {
            Clients = clientRepository;
        }
        public IClientRepository Clients { get; }
    }
}
