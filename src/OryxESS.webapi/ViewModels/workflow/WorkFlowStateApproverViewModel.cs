using OryxESS.Entities.Workflow;
using System.ComponentModel.DataAnnotations;
namespace OryxESS.webapi.ViewModels.workflow
{
    public class WorkFlowStateApproverViewModel
    {
        public int LineId { get; set; }
        public int WorkFlowStateId { get; set; }
        [Required]
        public int EmployeeId { get; set; }
        public bool Status { get; set;  }

        public string EmployeeDisplayName { get; set; }

        public string EmployeeEmail { get; set; }

        public static WorkFlowStateApproverViewModel FromEntity(WorkFlowStateApprover entity)
        {
            return new WorkFlowStateApproverViewModel
            {
                LineId = entity.LineId,
                WorkFlowStateId = entity.WorkFlowStateId,
                EmployeeId = entity.EmployeeId,
                Status = entity.Status
            };
        }

    }
}
