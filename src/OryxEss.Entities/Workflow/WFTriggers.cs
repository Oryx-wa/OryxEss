using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OryxESS.Entities.Workflow
{
    public class WFTriggers:IEntityBase
    {
        public WFTriggers()
        {
            WFPermittedTriggers = new List<WFPermittedTrigger>();
        }
        [Key]
        public  int TriggerId { get; set; }
        [Required]
        [MaxLength(30)]
        public string Trigger { get; set; }
        public bool Active { get; set; }

        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UserSign { get; set; }

        public virtual ICollection<WFPermittedTrigger> WFPermittedTriggers { get; set; }

    }
}
