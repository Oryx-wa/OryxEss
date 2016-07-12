using OryxESS.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OryxESS.Entities.iou;
using OryxESS.Data.Infrastructure;

namespace OryxESS.Data.Repositories.iou
{
    public class IouRepository : EntityBaseRepository<iouHeader>
    {
        public iouHeader[] _iouHeaders;
        public IouRepository(IDbFactory dbFactory) : base(dbFactory)
        {

        }

        public override iouHeader GetSingle(int id)
        {
            return GetAll().FirstOrDefault(x => x.IouId == id);
            //return null;
        }

        public static iouHeader[] Generate()
        {
            return new iouHeader[]
            {
                new iouHeader
                {
                    DocDate = DateTime.UtcNow,
                    DueDate = DateTime.UtcNow,
                    EmployeeID = 1,
                    Comments = "New iou1",
                    ProjectCode = "P002",
                    RequestAmount = 20000,
                    Status = "New",
                    SiteCode = "",
                    iouStatuses = new List<iouStatus>
                    {
                        new iouStatus
                        {
                            EmployeeID = 1, IouId = 1, Remark = "New",StatusDate = DateTime.UtcNow, StateCode = "New", LineId = 1

                        }
                    }
                },
                new iouHeader
                {
                    DocDate = DateTime.UtcNow,
                    DueDate = DateTime.UtcNow,
                    EmployeeID = 2,
                    Comments = "New iou2",
                    ProjectCode = "P001",
                    RequestAmount = 20000,
                    Status = "HODApproved",
                    SiteCode = "",
                    iouStatuses = new List<iouStatus>
                    {
                        new iouStatus
                        {
                            EmployeeID = 1, IouId = 2, Remark = "New",StatusDate = DateTime.UtcNow, StateCode = "New", LineId = 1

                        },
                         new iouStatus
                        {
                            EmployeeID = 3, IouId = 2, Remark = "HODApproved",StatusDate = DateTime.UtcNow, StateCode = "HODApproved", LineId =2

                        }
                    }
               },

        };


        }
    }
}
