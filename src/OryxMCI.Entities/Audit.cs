using OryxMCI.Entities;
using System;

namespace OryxMCI.Entities
{
    public class Audit : IEntityBase
    {
        public int AuditId { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Action { get; set; }
        public string Val { get; set; }
        public string User { get; set; }

        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }

        public int UserSign { get; set; }
    }
}