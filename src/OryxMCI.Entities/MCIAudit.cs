using OryxMCI.Entities;
using System;
using System.ComponentModel.DataAnnotations;

namespace OryxMCI.Entities
{
    public class MCIAudit : IEntityBase
    {
        [Key]
        public int AuditId { get; set; }
        public string Code { get; set; }
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }
        [Required]
        public DateTime Date { get; set; }
        [MaxLength(30)]
        public string Action { get; set; }
        [MaxLength(30)]
        public string Val { get; set; }
        [MaxLength(30)]
        public string User { get; set; }

        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }

        public int UserSign { get; set; }
    }
}