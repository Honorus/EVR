using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClassLibrary1
{
    class UserContext : DbContext
    {
        public UserContext()
        : base("DbConnection")
        { }

        public DbSet<User> Users { get; set; }
    }
}
