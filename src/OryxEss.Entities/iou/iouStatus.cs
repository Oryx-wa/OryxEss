using System;

namespace OryxESS.Entities.iou
{
    public class iouStatus : IEntityBase
    {

        public int ID { get; set; }
        public int iouID { get; set; }
        public virtual iouHeader iou { get; set; }
        public int EmployeeID { get; set; }
        public string Status { get; set; }
        public DateTime StatusDate { get; set; }
        public string Remark { get; set; }

    }
}