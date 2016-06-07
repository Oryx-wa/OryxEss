using OryxESS.Entities.iou;
using System;
using System.ComponentModel.DataAnnotations;

namespace OryxESS.webapi.ViewModels
{
    public class iouPaymentViewModel
    {
        [Required]
        public int ID { get; set; }
        [Required]
        public DateTime DocDate { get; set; }
        public int DocNum { get; set; }
        [Required]
        public Decimal Amount { get; set; }
        public int iouID { get; set; }

        public static iouPaymentViewModel FromEntity(iouPayment entity)
        {
            return new iouPaymentViewModel
            {
                ID = entity.ID,
                DocDate = entity.DocDate,
                DocNum = entity.DocNum,
                Amount = entity.Amount,
                iouID = entity.iouID
            };
        }
    }
}