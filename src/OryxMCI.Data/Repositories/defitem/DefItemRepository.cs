using OryxMCI.Entities;
using System.Linq;
using OryxMCI.Data.Infrastructure;

namespace OryxMCI.Data.Repositories.defitem
{
    public class DefItemRepository<T> : EntityBaseRepository<T>, IDefItemRepository<T>
        where T : class, IDefItem, new()
    {
        public DefItemRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }

        public override T GetSingle(int id)
        {
            return GetAll().FirstOrDefault(x => x.Id == id);
        }

    }
}
