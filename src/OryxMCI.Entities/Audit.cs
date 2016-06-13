using OryxMCI.Entities;
using System;

namespace OryxMCI.Entities
{
    public class Audit : IEntityBase
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Action { get; set; }
        public string Val { get; set; }
        public string User { get; set; }
    }
}