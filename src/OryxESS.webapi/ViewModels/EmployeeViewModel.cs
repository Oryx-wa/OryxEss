using OryxESS.Entities.hr;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using OryxESS.webapi.Infrastructure.Core;
using System;

namespace OryxESS.webapi.ViewModels
{
    public class EmployeeViewModel
    {
        public int ID { get; set; }
        [Required]
        [StringLength(255, MinimumLength = 5)]
        public string FirstName { get; set; }

        [Required]
        [StringLength(255, MinimumLength = 5)]
        public string LastName { get; set; }

        [Required]
        [StringLength(255, MinimumLength = 5)]
        public string Email { get; set; }

        [Required]
        [StringLength(30, MinimumLength = 5)]
        public string StaffNo { get; set; }

        public int DepartmentID { get; set; }
        public string Status { get; set; }
        public decimal Balance { get; set; }
        public string Blocked { get; set; }

        [StringLength(25, MinimumLength = 6)]
        public string Mobile1 { get; set; }

        [StringLength(25, MinimumLength = 6)]
        public string Mobile2 { get; set; }


        public static  EmployeeViewModel FromEntity(Employee entity)
        {
            return new EmployeeViewModel
            {
                ID = entity.EmployeeId,
                FirstName = entity.FirstName,
                LastName = entity.LastName,
                Email = entity.Email,
                Balance = entity.Balance,
                Blocked = entity.Blocked,
                DepartmentID = entity.DepartmentID,
                StaffNo = entity.StaffNo,
                Status = entity.Status,
                Mobile1 = entity.Mobile1,
                Mobile2 = entity.Mobile2
            };
        }

        public  Employee ToEntity()
        {
            return new Employee
            {
                EmployeeId = ID,
                FirstName = FirstName,
                LastName = LastName,
                Email = Email,
                Balance = Balance,
                Blocked = Blocked,
                DepartmentID = DepartmentID,
                StaffNo = StaffNo,
                Status = Status,
                Mobile1 = Mobile1,
                Mobile2 = Mobile2
            };
        }

       
    }

    //public static class EmployeeMapper
    //{
    //    public static Employee ConvertToDTO(this Employee entity)
    //    {
    //        return new Employee
    //        {
    //            ID = entity.ID,
    //            FirstName = entity.FirstName,
    //            LastName = entity.LastName,
    //            Email = entity.Email,
    //            Balance = entity.Balance,
    //            Blocked = entity.Blocked,
    //            DepartmentID = entity.DepartmentID,
    //            StaffNo = entity.StaffNo,
    //            Status = entity.Status,
    //            Mobile1 = entity.Mobile1,
    //            Mobile2 = entity.Mobile2
    //        };
    //    }

    //    public static IEnumerable<Employee> ConvertToDTO(this IEnumerable<Employee> Employee)
    //    {
    //        return Employee.Select(emp => emp.ConvertToDTO());
    //    }
    //}
    
    
}
