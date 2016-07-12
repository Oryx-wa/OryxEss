using OryxESS.Entities.Workflow;
using System.ComponentModel.DataAnnotations;

namespace OryxESS.webapi.ViewModels.workflow
{
    public class WFPermittedTriggerViewModel
    {
        public int LineId { get; set; }
        [Required]
        [StringLength(20, MinimumLength = 1)]
        public string Trigger { get; set; }
        [Required]
        [StringLength(20, MinimumLength = 1)]
        public string State { get; set; }
        [Required]
        [StringLength(20, MinimumLength = 1)]
        public string PermittedStateCode { get; set; }
        
        public bool Active { get; set; }

        public static WFPermittedTriggerViewModel FromEntity(WFPermittedTrigger entity)
        {
            return new WFPermittedTriggerViewModel
            {
                LineId = entity.LineId,
                Trigger = entity.Trigger,
                State = entity.State,
                PermittedStateCode = entity.PermittedStateCode,
                Active = entity.Active
            };
        }

    }
}
