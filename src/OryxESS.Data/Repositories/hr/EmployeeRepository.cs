using OryxESS.Entities.hr;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OryxESS.Data.Infrastructure;

namespace OryxESS.Data.Repositories.hr
{
    public class EmployeeRepository : EntityBaseRepository<Employee>
    {
        public EmployeeRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }
        public override Employee GetSingle(int id)
        {
            return GetAll().FirstOrDefault(x => x.EmployeeId == id);
            //return null;
        }

        public static Employee[] Generate()
        {
            return new Employee[]
            {
                new Employee
                {
                     FirstName = "Tobi",
                     LastName = "Adegbola",
                     StaffNo = "001",
                     Email = "tayo.adegbola@oryx-wa.com",
                     Status = "Active",
                     Blocked = "N",
                     Mobile1 = "014630603",
                     Mobile2 = "02341232",
                     Balance = 0,
                     DepartmentID = 1,
                     BPCode= "C0002"

                },
                new Employee
                {
                        FirstName = "Yinka",
                        LastName = "Adegbola",
                        StaffNo = "002",
                        Email = "tayoadegbola@hotmail.com",
                        Status = "Active",
                        Blocked = "N",
                        Mobile1 = "024630603",
                        Mobile2 = "02341232",
                        Balance = 0,
                        DepartmentID = 1,
                        BPCode= "C0002"

                },
                 new Employee
                {
                        FirstName = "Tomi",
                        LastName = "Adetona",
                        StaffNo = "003",
                        Email = "tomi.adetona@oryx-wa.com",
                        Status = "Active",
                        Blocked = "N",
                        Mobile1 = "024630603",
                        Mobile2 = "02341232",
                        Balance = 0,
                        DepartmentID = 1,
                        BPCode= "C0002"

                }

            };
        }
    }
}
