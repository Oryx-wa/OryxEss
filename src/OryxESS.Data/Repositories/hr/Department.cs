using OryxESS.Entities.hr;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OryxESS.Data.Infrastructure;

namespace OryxESS.Data.Repositories.hr
{
    public  class DepartmentRepository : EntityBaseRepository<Department>
    {
        public DepartmentRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }
        public override Department GetSingle(int id)
        {
            return GetAll().FirstOrDefault(x => x.DepartmentId == id);
        }
        public static  Department[] Generate()
        {
            return new Department[]
            {
                new Department{DepartmentName = "IBU", HOD = 2 },
                new Department{DepartmentName = "FBU", HOD = 3 }
                
            };
        }
    }
}
