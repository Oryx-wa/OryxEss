using OryxESS.Entities.Workflow;
using System.ComponentModel.DataAnnotations;


namespace OryxESS.webapi.ViewModels.workflow
{
    public class WFTriggerViewModel
    {
        public int TriggerId { get; set; }
        [Required]
        [StringLength(30, MinimumLength = 1)]
        public string Trigger { get; set; }
        public bool Active { get; set; }

        public static WFTriggerViewModel FromEntity( WFTriggers entity)
        {
            return new WFTriggerViewModel
            {
                TriggerId = entity.TriggerId,
                Trigger = entity.Trigger,
                Active = entity.Active
            };
        }
    }
}
