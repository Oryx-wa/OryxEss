using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OryxESS.Entities.Workflow
{
    public class WFStates:IEntityBase
    {
        
        public WFStates()
        {
            WFPermittedTriggers = new List<WFPermittedTrigger>();
        }

        
        [Key]
        public int StateId { get; set; }

        [MaxLength(30)]
        public string State { get; set; }
        [MaxLength(30)]
        public string StateName { get; set; }

        [Required]
        [MaxLength(30)]
        public string appCode { get; set; }

        public virtual ICollection<WFPermittedTrigger> WFPermittedTriggers { get; set; }

        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UserSign { get; set; }

    }
}
