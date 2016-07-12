using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OryxESS.Entities;
using System.ComponentModel.DataAnnotations;

namespace OryxESS.Entities
{
    public class Error : IEntityBase
    {
        [Key]
        public int ErrorID { get; set; }
        [Required, MaxLength(254)]
        public string Message { get; set; }

        public string StackTrace { get; set; }
        public DateTime DateCreated { get; set; }

        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UserSign { get; set; }
    }
}
