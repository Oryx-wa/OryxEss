using OryxMCI.Entities;
using System.Linq;
using OryxMCI.Data.Infrastructure;

namespace OryxMCI.Data.Repositories.mci
{
    public class MCIRepository : EntityBaseRepository<MCIData>
    {
        public MCIRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }

        public override MCIData GetSingle(int id)
        {
            return GetAll().FirstOrDefault(x => x.MCIId == id);
        }

    }
}
