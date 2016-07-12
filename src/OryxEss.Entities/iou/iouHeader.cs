using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OryxESS.Entities.iou
{
    public class iouHeader : IEntityBase
    {

        public iouHeader()
        {
            iouPayments = new List<iouPayment>();
            iouStatuses = new List<iouStatus>();
            iouRetirements = new List<iouRetirement>();
        }
        [Key]
        public int IouId { get; set; }
        [Required]
        public DateTime DocDate { get; set; }

        public DateTime DueDate { get; set; }
        
        public string Status { get; set; }

        [Required]
        public Decimal RequestAmount { get; set; }
        [Required]
        public int EmployeeID { get; set; }
        [Required, MaxLength(30)]
        public string ProjectCode { get; set; }
        [MaxLength(30)]
        public string SiteCode { get; set; }
        [Required, MaxLength(250)]
        public string Comments { get; set; }

        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UserSign { get; set; }

        public virtual ICollection<iouPayment> iouPayments { get; set; }
        public virtual ICollection<iouStatus> iouStatuses { get; set; }
        public virtual ICollection<iouRetirement> iouRetirements { get; set; }

    }
}
