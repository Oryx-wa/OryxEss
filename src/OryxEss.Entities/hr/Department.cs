using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OryxESS.Entities.hr
{
    public class Department : IEntityBase
    {
        [Key]
        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }
        [Required]
        public int HOD { get; set; }

        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UserSign { get; set; }
    }
}
