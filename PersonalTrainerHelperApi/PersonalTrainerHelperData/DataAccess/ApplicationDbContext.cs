using Microsoft.EntityFrameworkCore;
using PersonalTrainerHelperData.Models;

namespace PersonalTrainerHelperData.DataAccess
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Client> Clients { get; set; }
        public DbSet<Plan> Plans { get; set; }
        public DbSet<Exercise> Exercises { get; set; }
    }
}
