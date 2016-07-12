using System;
using System.ComponentModel.DataAnnotations;

namespace OryxESS.Entities.iou
{
    public class iouPayment : IEntityBase

    {
        
        public int LineId { get; set; }

        public DateTime DocDate { get; set; }
        public int DocNum { get; set; }
        public Decimal Amount { get; set; }

        public int IouId { get; set; }
        public  iouHeader iou { get; set; }

        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UserSign { get; set; }

    }
}