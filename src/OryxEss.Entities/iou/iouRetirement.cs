using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OryxESS.Entities.iou
{
    public class iouRetirement : IEntityBase
    {
        public iouRetirement()
        {
            RetirementLines = new List<iouRetirementLines>();
        }
        [Key]
        public int IouRetId { get; set; }

        public int IouId { get; set; }

        public iouHeader IouHeader { get; set; }
        [Required]
        public DateTime RetirementDate { get; set; }        
        public DateTime TransDate { get; set; }        
        public Decimal TotalAmount { get; set; }        
        public int transid { get; set; }       
        public string comments { get; set; }
        public virtual ICollection<iouRetirementLines> RetirementLines { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UserSign { get; set; }


    }
}
