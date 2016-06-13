using OryxMCI.Entities;

namespace OryxESS.webapi.Infrastructure.Core
{
    public interface IEntityMappper<T> where T : class, IEntityBase, new()
    {
        IEntityMappper<T> FromEntity(IEntityBase entity);
        IEntityBase ToEntity();
    }
}
