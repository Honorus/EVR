using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dao.Model
{
    public class Image:BaseModel
    {
        public string ImageName { get; set; }
        public string ImageUrl { get; set; }
        public string Extension { get; set; }
        public int Rating { get; set; }

        public virtual User Owner { get; set; }
    }
}
