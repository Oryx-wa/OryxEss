using OryxESS.Entities.Workflow;
using System.ComponentModel.DataAnnotations;

namespace OryxESS.webapi.ViewModels.workflow
{
    public class WorkFlowViewModel
    {
        public int WorkFlowId { get; set; }
        [Required]
        [StringLength(30, MinimumLength = 1)]
        public string WorkFlowCode { get; set; }
        [Required]
        [StringLength(100, MinimumLength = 1)]
        public string WorkFlowName { get; set; }
        [Required]
        [StringLength(30, MinimumLength = 1)]
        public string appCode { get; set; }
        public bool Status { get; set; }

        public static WorkFlowViewModel FromEntity( WorkFlow entity)
        {
            return new WorkFlowViewModel
            {
                WorkFlowId = entity.WorkFlowId,
                WorkFlowCode = entity.WorkFlowCode,
                WorkFlowName = entity.WorkFlowName,
                appCode = entity.appCode,
                Status = entity.Status
            };
        }


    }
}
