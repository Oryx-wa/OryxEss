using OryxESS.Entities.iou;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OryxESS.webapi.ViewModels
{
    public class iouHeaderViewModel
    {
        public int ID { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime DocDate { get; set; } = DateTime.UtcNow;
        [DataType(DataType.Date)]
        public DateTime DueDate { get; set; } = DateTime.UtcNow;
        [StringLength(4,MinimumLength =4)]
        public string Status { get; set; }
        [Required]
        public Decimal RequestAmount { get; set; }
        [Required]
        public int EmployeeID { get; set; }
        [Required]
        public string ProjectCode { get; set; }
        public string SiteCode { get; set; }

        [StringLength(5, MinimumLength = 4)]
        public string Comments { get; set; }

        public IEnumerable<iouPaymentViewModel> iouPayments { get; set; }
        public IEnumerable<iouStatusViewModel> iouStatuses { get; set; }

        public static iouHeaderViewModel FromEntity(iouHeader entity)
        {
            return new iouHeaderViewModel
            {
                ID = entity.ID,
                DocDate = entity.DocDate,
                DueDate = entity.DueDate,
                Status = entity.Status,
                RequestAmount = entity.RequestAmount,
                EmployeeID = entity.EmployeeID,
                ProjectCode = entity.ProjectCode,
                SiteCode = entity.SiteCode,
                Comments = entity.Comments
            };
        }
    }
}
