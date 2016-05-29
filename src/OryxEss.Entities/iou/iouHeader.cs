using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OryxESS.Entities.iou
{
    public class iouHeader : IEntityBase
    {

        public iouHeader()
        {
            iouPayments = new List<iouPayment>();
            iouStatuses = new List<iouStatus>();
        }

        public int ID { get; set; }
        public DateTime DocDate { get; set; }
        public DateTime DueDate { get; set; }
        public string Status { get; set; }
        public Decimal RequestAmount { get; set; }
        public int EmployeeID { get; set; }
        public string ProjectCode { get; set; }
        public string SiteCode { get; set; }
        public string Comments { get; set; }

        public virtual ICollection<iouPayment> iouPayments { get; set; }
        public virtual ICollection<iouStatus> iouStatuses { get; set; }

    }
}
