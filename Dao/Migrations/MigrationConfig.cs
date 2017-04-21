using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dao.Migrations
{
    public sealed class MigrationConfig : DbMigrationsConfiguration<Dao.BoobsContext>
    {
        public MigrationConfig()
        {
            AutomaticMigrationsEnabled = true;
            ContextKey = "Dao.BoobsContext";
        }

        protected override void Seed(Dao.BoobsContext context)
        {
        }
    }
}
