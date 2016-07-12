using System;
using System.ComponentModel.DataAnnotations;


namespace OryxMCI.Entities
{
    public class DefItem : IEntityBase
    {
        
        public int Id { get; set; }

        public string Code { get; set; }
        public string Name { get; set; }

        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }

        public int UserSign { get; set; }
    }
}
