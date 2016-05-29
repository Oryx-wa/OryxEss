using System;

namespace OryxESS.Entities.iou
{
    public class iouPayment : IEntityBase

    {

        public int ID { get; set; }
        public DateTime DocDate { get; set; }
        public int DocNum { get; set; }
        public Decimal Amount { get; set; }
        public int iouID { get; set; }
        public virtual iouHeader iou { get; set; }


    }
}