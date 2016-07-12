using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OryxESS.Entities.Workflow
{
    public class WFPermittedTrigger:IEntityBase
    {
        
        public int LineId { get; set; }
        [MaxLength(30)]
        public string Trigger { get; set; }
        public WFTriggers WFTrigger { get; set; }
        [MaxLength(30)]
        public string State { get; set; }
        public WFStates WFState { get; set; }
        [Required]
        public string PermittedStateCode { get; set; }
        
        public bool Active { get; set; }

        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UserSign { get; set; }
    }
}
