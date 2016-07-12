using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OryxESS.Entities.iou
{
    public class iouRetirementLines : IEntityBase
    {
        
        
        
        public int LineId { get; set; }

        [Required, MaxLength(50)]
        public string RetTypeCode { get; set; }
        [Required]
        public Decimal RetAmount { get; set; }
        [Required, MaxLength(30)]
        public string ProjectCode { get; set; }
        [Required, MaxLength(250)]
        public string LineMemo { get; set; }
        public int IouRetId { get; set; }
        public iouRetirement IouRetirement { get; set; }

        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UserSign { get; set; }

    }
}
