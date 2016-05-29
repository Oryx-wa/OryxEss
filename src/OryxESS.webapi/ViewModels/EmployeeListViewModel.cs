using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using OryxESS.Entities;

namespace OryxESS.webapi.ViewModels
{
    public class EmployeeListViewModel
    {
        public int ID { get; set; }

        [Required]
        [StringLength(255, MinimumLength = 5)]
        public string FirstName { get; set; }

        [Required]
        [StringLength(255, MinimumLength = 5)]
        public string LastName { get; set; }

        public static EmployeeViewModel FromEmployee( Employee entity)
        {
            return new EmployeeViewModel { ID = entity.ID, FirstName = entity.FirstName, LastName = entity.LastName };
        }

        public Employee ToEmployee ()
        {
            return new Employee { ID = ID, FirstName = FirstName, LastName = LastName };
        }

        public static object FromEmployee(IEnumerable<Employee> employees)
        {
            throw new NotImplementedException();
        }
    }
}
