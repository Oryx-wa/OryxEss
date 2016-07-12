using OryxESS.Entities.Workflow;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OryxESS.Data.Infrastructure;

namespace OryxESS.Data.Repositories.workflow
{
    public class WFTriggerRepository : EntityBaseRepository<WFTriggers>
    {
        public WFTriggerRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }

        public override WFTriggers GetSingle(int id)
        {
            return GetAll().FirstOrDefault(x => x.TriggerId == id);
        }

        public static WFTriggers[] Generate()
        {
            return new WFTriggers[]
            {
                
                new WFTriggers {  Trigger = "Approval", Active = true },
                //new WFTriggers {  Trigger = "AccountApproval", Active = true },
                new WFTriggers {  Trigger = "Reject", Active = true },
                new WFTriggers {  Trigger = "Paid", Active = true },
                new WFTriggers {  Trigger = "Cancel", Active = true },
                
        };

        }
    }
}
