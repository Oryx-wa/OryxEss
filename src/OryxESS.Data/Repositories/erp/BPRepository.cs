using OryxESS.Entities.ERP;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OryxESS.Data.Infrastructure;

namespace OryxESS.Data.Repositories.erp
{
    public class BPRepository : EntityBaseRepository<BP>
    {
        public BPRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }
        public override BP GetSingle(int id)
        {
            return GetAll().FirstOrDefault(x => x.BPCodeId == id);
        }

        public static BP[] Generate()
        {
            return new BP[]{
                new BP{Code = "C0001",Name = "BP 1", ControlAccount = "100090"},
                new BP{Code = "C0002",Name =  "BP 2", ControlAccount = "100090"},
                new BP{Code = "C0003",Name =  "BP 3", ControlAccount = "100090"},
            };
        }
    }
}
