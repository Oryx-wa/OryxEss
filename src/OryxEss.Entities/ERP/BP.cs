using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OryxESS.Entities.ERP
{
    public class BP : IEntityBase
    {

        [Key]
        public int BPCodeId { get; set; }
        [MaxLength(100)]
        public string Code { get; set; }

        [Required, MaxLength(100)]
        public string Name { get; set; }

        [Required, MaxLength(100)]
        public string ControlAccount { get; set; }

        public bool Status { get; set; }

        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UserSign { get; set; }
    }
}
