using OryxESS.Entities.Workflow;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OryxESS.Data.Infrastructure;

namespace OryxESS.Data.Repositories.workflow
{
    public class WFStateRepository : EntityBaseRepository<WFStates>
    {
        public WFStateRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }

        public override WFStates GetSingle(int id)
        {
            return GetAll().FirstOrDefault(x => x.StateId == id);
        }

        public static WFStates[] Generate()
        {
            return new WFStates[]
            {
            new WFStates
            {                
                State = "New",
                StateName = "New Request",
                appCode = "IOU",
                WFPermittedTriggers = new List<WFPermittedTrigger>
                        {
                        new WFPermittedTrigger { LineId = 1, State = "New", PermittedStateCode = "HODApproved", Trigger = "Approval"},
                        new WFPermittedTrigger { LineId = 2, State = "New", PermittedStateCode = "Rejected", Trigger = "Reject"},
                        new WFPermittedTrigger { LineId = 2, State = "New", PermittedStateCode = "Cancelled", Trigger = "Cancel"}
                        }
            },
            new WFStates
            {
                
                State = "HODApproved",
                StateName = "HOD Approval",
                appCode = "IOU",
                WFPermittedTriggers = new List<WFPermittedTrigger>
                        {
                        new WFPermittedTrigger { LineId = 1, State = "HODApproved", PermittedStateCode = "AccountApproved", Trigger = "Approval"},
                        new WFPermittedTrigger { LineId = 2, State = "HODApproved", PermittedStateCode = "Rejected", Trigger = "Reject"},
                        }
            },
            new WFStates
            {                
                State = "AccountApproved",
                StateName = "Account Approval",
                appCode = "IOU",
                WFPermittedTriggers = new List<WFPermittedTrigger>
                        {
                        new WFPermittedTrigger { LineId = 1, State = "AccountApproved", PermittedStateCode = "Completed",Trigger = "Paid" }
                        }
            },
           
            new WFStates
            {                
                State = "Rejected",
                StateName = "Rejected",
                appCode = "IOU"
            },
            new WFStates
            {                
                State = "Completed",
                StateName = "Completed",
                appCode = "IOU"
            },
             new WFStates
            {

                State = "Cancelled",
                StateName = "Cancelled",
                appCode = "IOU"
            },
            };
        }
    }


}
