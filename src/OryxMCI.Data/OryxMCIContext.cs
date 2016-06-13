using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using OryxMCI.Entities;
using System;

namespace OryxMCI.Data
{
    public class OryxMCIContext: DbContext
    {
        public OryxMCIContext(DbContextOptions<OryxMCIContext> options )
        : base()
        {

        }
        


        #region EntitySets
     

        public DbSet<Agent> AgentSet { get; set; }
        public DbSet<Audit> AuditSet { get; set; }
        public DbSet<Berth> BerthSet { get; set; }
        public DbSet<Inspector> InspectorSet { get; set; }
        public DbSet<MCIData> MCIDataSet { get; set; }
        public DbSet<Port> PortSet { get; set; }
        public DbSet<Vessel> VesselSet { get; set; }
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
