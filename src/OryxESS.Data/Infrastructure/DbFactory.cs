using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OryxESS.Data.Infrastructure
{
    public class DbFactory : Disposable, IDbFactory
    {
        OryxESSContext dbContext;
        IConfigurationRoot Configuration { get; set; }
        public OryxESSContext Init()
         {
            var optionsBuilder = new DbContextOptionsBuilder<OryxESSContext>();

            string connString = "Server = localhost; Database = iou2; Trusted_Connection = true; MultipleActiveResultSets = true";
            //Configuration["Data:DefaultConnection:OryxESSConnectionString"];
            optionsBuilder.UseSqlServer(connString);

            return dbContext ?? (dbContext = new OryxESSContext(optionsBuilder.Options));
        }

        protected override void DisposeCore()
        {
            if (dbContext != null)
                dbContext.Dispose();
        }
    }
}
