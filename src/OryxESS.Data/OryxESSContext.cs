using Microsoft.Data.Entity;
using OryxESS.Entities;
using OryxESS.Entities.iou;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OryxESS.Data
{
    public class OryxESSContext:DbContext
    {
        public OryxESSContext()
        {
            Database.EnsureCreated();
        }

        #region EntitySets
        public DbSet<Employee> EmployeeSet { get; set; }
        public DbSet<iouHeader> iouHeaderSet { get; set; }
        public DbSet<iouPayment> iouPaymentSet { get; set; }
        public DbSet<iouStatus> iouStatusSet { get; set; }
        #endregion

        public virtual void Commit()
        {
            base.SaveChanges();
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            try
            {
                var connString = "Server = localhost; Database = iou2; Trusted_Connection = true; MultipleActiveResultSets = true";

                optionsBuilder.UseSqlServer(connString);

                base.OnConfiguring(optionsBuilder);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
