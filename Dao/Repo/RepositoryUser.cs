using Dao.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dao.Repo
{
    public class RepositoryUser
    {
        public BoobsContext Db { get; set; }// = ContextForRepository.Context;
        public DbSet<User> Entity { get; set; }

        public RepositoryUser(BoobsContext db)
        {
            Db = db;
            Entity = Db.Set<User>();
        }

        public User GetById(long userId)
        {
            return Entity.FirstOrDefault(x => x.Id == userId);
        }

        public User Save(User model)
        {
            if (model.Id > 0)
            {
                if (Db.Entry(model).State == EntityState.Detached)
                {
                    Entity.Attach(model);
                }
                Db.Entry(model).State = EntityState.Modified;
                Db.SaveChanges();
                return model;
            }

            Entity.Add(model);
            Db.SaveChanges();
            return model;
        }
    }
}
