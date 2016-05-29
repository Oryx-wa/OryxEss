using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OryxESS.Data.Infrastructure
{
    public class DbFactory : Disposable, IDbFactory
    {
        OryxESSContext dbContext;

        public OryxESSContext Init()
        {
            return dbContext ?? (dbContext = new OryxESSContext());
        }

        protected override void DisposeCore()
        {
            if (dbContext != null)
                dbContext.Dispose();
        }
    }
}
