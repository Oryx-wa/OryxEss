using System;
using System.ComponentModel.DataAnnotations;

namespace OryxESS.Entities.iou
{
    public class iouStatus : IEntityBase
    {
        
        public int LineId { get; set; }
        
        public int IouId { get; set; }
        public  iouHeader iou { get; set; }
        public int EmployeeID { get; set; }
       
        public DateTime StatusDate { get; set; }
        [MaxLength(250)]
        public string Remark { get; set; }
        [MaxLength(30)]
        public string StateCode { get; set; }
       

        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UserSign { get; set; }
    }
}