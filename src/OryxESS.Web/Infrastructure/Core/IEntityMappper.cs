using OryxESS.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OryxESS.webapi.Infrastructure.Core
{
    public interface IEntityMappper<T> where T : class, IEntityBase, new()
    {
        IEntityMappper<T> FromEntity(IEntityBase entity);
        IEntityBase ToEntity();
    }
}
