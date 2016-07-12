using OryxESS.Entities.iou;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OryxESS.webapi.ViewModels
{
    public class iouHeaderViewModel:BaseViewModel
    {
        public int IouId { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime DocDate { get; set; } = DateTime.UtcNow;
        [DataType(DataType.Date)]
        public DateTime DueDate { get; set; } = DateTime.UtcNow;
        [StringLength(20,MinimumLength =1)]
        public string Status { get; set; }
        [Required]
        public Decimal RequestAmount { get; set; }
        [Required]
        public int EmployeeID { get; set; }
        [Required]
        public string ProjectCode { get; set; }
        public string SiteCode { get; set; }

        [StringLength(250, MinimumLength = 5)]
        public string Comments { get; set; }

        public IEnumerable<iouPaymentViewModel> iouPayments { get; set; }
        public IEnumerable<iouStatusViewModel> iouStatuses { get; set; }

        public int UserSign { get; set; }
        

        public static iouHeaderViewModel FromEntity(iouHeader entity)
        {
            return new iouHeaderViewModel
            {
                IouId = entity.IouId,
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
