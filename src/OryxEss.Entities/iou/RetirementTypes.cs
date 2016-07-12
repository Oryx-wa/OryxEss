using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OryxESS.Entities.iou
{
    public class RetirementTypes: IEntityBase
    {
        [Key]
        public int RetTypeId { get; set; }
        [MaxLength(20)]
        public string Code { get; set; }
        
        [Required, MaxLength(100)]
        public string Name { get; set; }

        [Required, MaxLength(50)]
        public string GLCode { get; set; }

        public bool Active { get; set; }

        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UserSign { get; set; }


    }
}
