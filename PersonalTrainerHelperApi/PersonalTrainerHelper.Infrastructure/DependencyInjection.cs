using Microsoft.Extensions.DependencyInjection;
using PersonalTrainerHelper.DataAccess.Interfaces;
using PersonalTrainerHelper.Infrastructure.Repositories;

namespace PersonalTrainerHelper.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services)
        {
            services.AddTransient<IClientRepository, ClientRepository>();
            services.AddTransient<IUnitOfWork, UnitOfWork>();
            return services;
        }
    }
}
