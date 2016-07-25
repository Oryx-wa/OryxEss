using System;
using System.ComponentModel.DataAnnotations;


namespace OryxMCI.Entities
{
    public class DefItem : IDefItem
    {
        [Key]
        public int Id { get; set; }

        public string Code { get; set; }
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }

        public int UserSign { get; set; }
    }
}
