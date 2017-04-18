using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dao.Model
{
    public class User: BaseModel
    {
        public virtual List<Image> Images { get; set; }
    }
}
