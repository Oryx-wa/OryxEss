using OryxMCI.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OryxMCI.Data.Repositories.defitem
{
    public interface IDefItemRepository <T>:  IEntityBaseRepository <T> 
        where T : class, IDefItem, new()
    {

    }
}
