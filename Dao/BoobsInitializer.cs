using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dao
{
    public class BoobsInitializer : DropCreateDatabaseIfModelChanges<BoobsContext>
    {
        protected override void Seed(BoobsContext context)
        {
            context.SaveChanges();
        }
    }
}
