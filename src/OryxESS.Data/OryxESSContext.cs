using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using OryxESS.Entities;
using OryxESS.Entities.iou;
using System;

namespace OryxESS.Data
{
    public class OryxESSContext:DbContext
    {
        public OryxESSContext(DbContextOptions<OryxESSContext> options)
        : base(options)
        {

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

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
            foreach (var entity in builder.Model.GetEntityTypes())
            {
                entity.Relational().TableName = entity.DisplayName();
            }
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
