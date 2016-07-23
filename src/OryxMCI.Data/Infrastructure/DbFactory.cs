using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OryxMCI.Data.Infrastructure
{
    public class DbFactory : Disposable, IDbFactory
    {
        OryxMCIContext dbContext;

        DbContextOptions<OryxMCIContext> _options;
        IConfigurationRoot Configuration { get; set; }

        public DbFactory(DbContextOptions<OryxMCIContext> options)
        {
            _options = options;
        }
        public OryxMCIContext Init()
         {
            //var optionsBuilder = new DbContextOptionsBuilder<OryxMCIContext>();

            //string connString = "Server = localhost; Database = MCI; Trusted_Connection = true; MultipleActiveResultSets = true";
            ////Configuration["Data:DefaultConnection:OryxMCIConnectionString"];
            //optionsBuilder.UseSqlServer(connString);

            return dbContext ?? (dbContext = new OryxMCIContext(_options));
        }

        protected override void DisposeCore()
        {
            if (dbContext != null)
                dbContext.Dispose();
        }
    }
}
