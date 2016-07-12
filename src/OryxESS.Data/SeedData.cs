using System;
using System.Linq;
using OryxESS.Data.Repositories.hr;
using OryxESS.Data.Repositories.workflow;
using OryxESS.Data.Repositories.iou;
using OryxESS.Data.Repositories.erp;

namespace OryxESS.Data
{

    public static class SeedData
    {
        //private OryxESSContext context;

        //public static void SeedData(OryxESSContext context)
        //{
        //    context = context;

        //}

        public static void EnsureSeedData(this OryxESSContext context)
        {
            try
            {
                if (!context.WFTriggerSet.Any())
                {
                    context.WFTriggerSet.AddRange(WFTriggerRepository.Generate());
                    context.SaveChanges();

                }
                if (!context.WFStateSet.Any())
                {
                    context.WFStateSet.AddRange(WFStateRepository.Generate());
                    context.SaveChanges();
                }
                if (!context.DepartmentSet.Any())
                {
                    context.DepartmentSet.AddRange(DepartmentRepository.Generate());
                    context.SaveChanges();
                }
                if (!context.EmployeeSet.Any())
                {
                    context.EmployeeSet.AddRange(EmployeeRepository.Generate());
                    context.SaveChanges();
                }
                
                if (!context.iouHeaderSet.Any())
                {
                    context.iouHeaderSet.AddRange(IouRepository.Generate());
                    context.SaveChanges();
                }

                if (!context.GLCodeSet.Any())
                {
                    context.GLCodeSet.AddRange(GLCodeRepository.Generate());
                    context.SaveChanges();
                }

                if (!context.BPSet.Any())
                {
                    context.BPSet.AddRange(BPRepository.Generate());
                    context.SaveChanges();
                }

                if (!context.WorkFlowSet.Any())
                {
                    context.WorkFlowSet.AddRange(WorkFlowRepository.Generate());
                    context.SaveChanges();
                }

            }
            catch (Exception ex)
            {

                throw ex;
            }

        }
        
    }
}
