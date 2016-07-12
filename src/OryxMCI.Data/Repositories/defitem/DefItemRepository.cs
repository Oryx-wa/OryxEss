using OryxMCI.Entities;
using System.Linq;
using OryxMCI.Data.Infrastructure;

namespace OryxMCI.Data.Repositories.defitem
{
    public class DefItemRepository : EntityBaseRepository<DefItem>
    {
        public DefItemRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }

        public override DefItem GetSingle(int id)
        {
            return GetAll().FirstOrDefault(x => x.Id == id);
        }

    }
}
