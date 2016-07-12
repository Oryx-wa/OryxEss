using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using OryxESS.Entities.Workflow;
using OryxESS.webapi.ViewModels;

namespace OryxESS.webapi.ViewModels.workflow
{
    public class WFStateViewModel
    {
        public int StateId { get; set; }
        [Required]
        [StringLength(30, MinimumLength = 1)]
        public string State { get; set; }
        [Required]
        [StringLength(100, MinimumLength = 1)]
        public string StateName { get; set; }
        [Required]
        [StringLength(30, MinimumLength = 1)]
        public string appCode { get; set; }
        public ICollection<WFPermittedTriggerViewModel> WFPermittedTriggers { get; set; }

        public static WFStateViewModel FromEntity(WFStates entity)
        {
            return new WFStateViewModel
            {
                StateId = entity.StateId,
                State = entity.State,
                StateName = entity.StateName,
                appCode = entity.appCode
                
            };
        }

}
}
