using OryxESS.Entities.ERP;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OryxESS.Data.Infrastructure;

namespace OryxESS.Data.Repositories.erp
{
    public class GLCodeRepository : EntityBaseRepository<GLCode>
    {
        public GLCodeRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }
        public override GLCode GetSingle(int id)
        {
            return GetAll().FirstOrDefault(x => x.GLCodeId == id);
        }

        public static GLCode[] Generate()
        {
            return new GLCode[]{
                new GLCode{Code = "100020",Name = "Transport Expense"},
                new GLCode{Code = "100030",Name = "Implementation Expense"},
                new GLCode{Code = "100040",Name = "Cash"},
            };
        }
    }
}
