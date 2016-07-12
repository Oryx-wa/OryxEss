using System;
using System.ComponentModel.DataAnnotations;

namespace OryxESS.Entities.hr
{
    public class Employee :  IEntityBase

    {
        
        public int EmployeeId { get; set; }

        [Required, MaxLength(30)]
        public string FirstName { get; set; }
        [Required, MaxLength(30)]
        public string LastName { get; set; }

        public string StaffNo { get; set; }
        [Required]
        public int DepartmentID { get; set; }
        [Required, MaxLength(200)]
        public string Email { get; set; }
        [MaxLength(30)]
        public string Status { get; set; }
        public decimal Balance { get; set; }
        public string Blocked { get; set; }
        [Required, MaxLength(30)]
        public string Mobile1 { get; set; }
        [MaxLength(30)]
        public string Mobile2 { get; set; }
        [MaxLength(30)]
        public string BPCode { get; set; }

        public int userId { get; set; }
       

        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UserSign { get; set; }

    }
}
