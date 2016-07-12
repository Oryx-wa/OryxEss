using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using OryxESS.Entities.ERP;
using OryxESS.Entities.hr;
using OryxESS.Entities.iou;
using OryxESS.Entities.Workflow;
using System;

namespace OryxESS.Data
{
    public  class OryxESSContext: DbContext
    {
        public OryxESSContext(DbContextOptions<OryxESSContext> options )
        : base( options)
        {

        }


        #region EntitySets
        public DbSet<Employee> EmployeeSet { get; set; }
        public DbSet<iouHeader> iouHeaderSet { get; set; }
        public DbSet<iouPayment> iouPaymentSet { get; set; }
        public DbSet<iouStatus> iouStatusSet { get; set; }
        public DbSet<WFStates> WFStateSet { get; set; }
        public DbSet<WFTriggers> WFTriggerSet { get; set; }
        public DbSet<WFPermittedTrigger> WFPermittedTriggerSet { get; set; }
        public DbSet<Department> DepartmentSet { get; set; }

        public DbSet<GLCode> GLCodeSet  { get; set; }
        public DbSet<BP> BPSet { get; set; }
        public DbSet<WorkFlow> WorkFlowSet { get; set; }
        public DbSet<WorkFlowState> WorkFlowStateSet { get; set; }
        public DbSet<WorkFlowStateApprover> WorkFlowStateApproverSet { get; set; }

        #endregion


        public virtual void Commit()
        {
            base.SaveChanges();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {

            OryxDataValidation.ModelConfiguration(ref builder);

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
                
                base.OnConfiguring(optionsBuilder);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
