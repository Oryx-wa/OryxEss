using OryxESS.Entities.iou;
using System;
using System.ComponentModel.DataAnnotations;

namespace OryxESS.webapi.ViewModels
{
    public class iouStatusViewModel
    {
        [Required]
        public int LineID { get; set; }
        [Required]
        public int iouID { get; set; }
        [Required]
        public int EmployeeID { get; set; }
        [Required]
        public string Status { get; set; }
        [Required]
        public DateTime StatusDate { get; set; }
        [StringLength(255,MinimumLength = 5)]
        public string Remark { get; set; }

        public static iouStatusViewModel FromEntity(iouStatus entity)
        {
            return new iouStatusViewModel
            {
                LineID = entity.LineId,
                iouID = entity.IouId,
                EmployeeID = entity.EmployeeID,
                Status = entity.StateCode,
                StatusDate = entity.StatusDate,
                Remark = entity.Remark            
            };
        }
    }
}