using OryxESS.Entities.Workflow;
using System.Linq;
using OryxESS.Data.Infrastructure;

namespace OryxESS.Data.Repositories.workflow
{
    public class WorkFlowRepository : EntityBaseRepository<WorkFlow>
    {
        public WorkFlowRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }
        public override WorkFlow GetSingle(int id)
        {
            return GetAll().FirstOrDefault(x => x.WorkFlowId == id);
        }

        public static WorkFlow[] Generate()
        {
            return new WorkFlow[]
            {
                new WorkFlow
                {
                    WorkFlowCode= "IBUIOU",
                    WorkFlowName = "IBU Workflow approval process",
                    appCode = "IOU",
                    WorkFlowStates = new WorkFlowState[]
                    {
                        new WorkFlowState { WorkFlowId = 1, StateCode = "New" },                        
                        new WorkFlowState { WorkFlowId = 1, StateCode = "HODApproved",
                           WorkFlowStateApprovers = new WorkFlowStateApprover[] {
                                new WorkFlowStateApprover { LineId = 1, EmployeeId = 2, WorkFlowStateId = 2}
                            }
                        },
                        new WorkFlowState { WorkFlowId = 1, StateCode = "AccountApproved",
                         WorkFlowStateApprovers = new WorkFlowStateApprover[] {
                                new WorkFlowStateApprover { LineId = 1, EmployeeId = 3, WorkFlowStateId = 3}
                            }
                        },
                        new WorkFlowState { WorkFlowId = 1, StateCode = "WaitingforPayment"
                        ,
                         WorkFlowStateApprovers = new WorkFlowStateApprover[] {
                                new WorkFlowStateApprover { LineId = 1, EmployeeId = 3, WorkFlowStateId = 4}
                            }
                        },
                        new WorkFlowState { WorkFlowId = 1, StateCode = "Rejected"},
                        new WorkFlowState { WorkFlowId = 1, StateCode = "Completed"}


                    }
                }
            };
        }
    }
}
