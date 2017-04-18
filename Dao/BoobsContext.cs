using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using Dao.Model;
using Dao.Migrations;

namespace Dao
{
    public class BoobsContext : DbContext
    {
        public BoobsContext()
            : base("name=BoobsContext")
        { }

        //public DbSet<Image> Images { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            modelBuilder.Entity<User>().HasMany(u => u.Images).WithRequired(x => x.Owner);
        }

        public static void SetInitializer()
        {
            //Database.SetInitializer(new CreateDatabaseIfNotExists<WriterContext>());
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<BoobsContext, MigrationConfig>());
        }
    }
}
