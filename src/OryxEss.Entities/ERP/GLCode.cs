using System;
using System.ComponentModel.DataAnnotations;

namespace OryxESS.Entities.ERP
{
    public class GLCode : IEntityBase
    {
        [Key]
        public int GLCodeId { get; set; }
        [MaxLength(100)]
        public string Code  { get; set; }
        [Required, MaxLength(100)]
        public string Name { get; set; }

        public bool Status { get; set; }

        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UserSign { get; set; }
    }
}
