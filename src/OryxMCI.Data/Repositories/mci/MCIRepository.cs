using OryxMCI.Entities;
using System.Linq;
using OryxMCI.Data.Infrastructure;
using System;

namespace OryxMCI.Data.Repositories.mci
{
    public class MCIRepository<T> : EntityBaseRepository<T>, IMCIRepository<T>
        where T :  MCIData, new()
    {
        public MCIRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }

        public override T GetSingle(int id)
        {
            return GetAll().FirstOrDefault(x => x.MCIId == id);
        }

        public override IQueryable<T> Search(string searchString)
        {
            if (!String.IsNullOrEmpty(searchString))
            {
                return GetAll().Where(x => x.VesselName.Contains(searchString) ||
                    x.Port.Contains(searchString) ||
                    x.Agent.Contains(searchString) ||
                    x.Type.Contains(searchString));
            }
            else
            {
                return null;
            }             
            
        }

        public override IQueryable<T> Search(string searchString,int pageNo = 1, int pageSize = 20, string orderBy = "CreateDate")
        {
            if (!String.IsNullOrEmpty(searchString))
            {
                // Determine the number of records to skip
                int skip = (pageNo - 1) * pageSize;

                // Get total number of records
                int total = DbContext.Set<MCIData>().Count();

                return GetAll().Where(x => x.VesselName.Contains(searchString) ||
                    x.Port.Contains(searchString) ||
                    x.Agent.Contains(searchString) ||
                    x.Type.Contains(searchString))
                    .OrderByDescending(orderBy)
                    .Skip(skip)
                    .Take(pageSize); ;
            }
            else
            {
                return null;
            }

        }
    }

    public interface IMCIRepository<T> : IEntityBaseRepository<T>
        where T : class, IEntityBase, new()
    {

    }
}
