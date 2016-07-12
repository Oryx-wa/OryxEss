using OryxESS.Entities.Workflow;
using System.ComponentModel.DataAnnotations;

namespace OryxESS.webapi.ViewModels.workflow
{
    public class WorkFlowStateViewModel
    {
        public int WorkFlowStateId { get; set; }
        public int WorkFlowId { get; set; }
        [Required]
        [StringLength(30, MinimumLength = 1)]
        public string StateCode { get; set; }
        public bool Status { get; set; }

        public static WorkFlowStateViewModel FromEntity(WorkFlowState entity)
        {
            return new WorkFlowStateViewModel
            {
                WorkFlowStateId = entity.WorkFlowStateId,
                WorkFlowId = entity.WorkFlowId,
                StateCode = entity.StateCode,
                Status = entity.Status
            };
        }
    }
}
