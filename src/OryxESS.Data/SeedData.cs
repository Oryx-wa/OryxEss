using OryxESS.Entities;
using OryxESS.Entities.iou;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OryxESS.Data
{
    
    public class SeedData
    {
        private OryxESSContext _context;

        public SeedData(OryxESSContext context)
        {
            _context = context;

        }

        public  void EnsureSeedData()
        {
            if(!_context.EmployeeSet.Any())
            {
                var emp = new Employee()
                {
                    FirstName = "Tobi",
                    LastName = "Adegbola",
                    StaffNo = "001",
                    Email = "tobi.adegbola@outlook.com",
                    Status = "Active",
                    Blocked = "N",
                    Mobile1 = "014630603",
                    Mobile2 = "02341232",
                    Balance = 0,
                    DepartmentID = 1
                };

                _context.EmployeeSet.Add(emp);

                emp = new Employee()
                {
                    FirstName = "Yinka",
                    LastName = "Adegbola",
                    StaffNo = "002",
                    Email = "Yinka.adegbola@outlook.com",
                    Status = "Active",
                    Blocked = "N",
                    Mobile1 = "024630603",
                    Mobile2 = "02341232",
                    Balance = 0,
                    DepartmentID = 2
                };

                _context.EmployeeSet.Add(emp);
                _context.SaveChanges();

                
                    
            }
            if (!_context.iouHeaderSet.Any())
            {
                var iou = new iouHeader()
                {
                    DocDate = DateTime.UtcNow,
                    DueDate = DateTime.UtcNow,
                    EmployeeID = 1,
                    Comments = "New iou",
                    ProjectCode = "P001",
                    RequestAmount = 10000,
                    Status = "N",
                    SiteCode = "",
                    iouStatuses = new List<iouStatus> {
                            new iouStatus { EmployeeID= 3, iouID = 1, Remark = "New",
                             StatusDate = DateTime.UtcNow, Status = "N"
                                            } }

                };

                _context.Add(iou);
                _context.SaveChanges();

            }

        }
        
    }
}
