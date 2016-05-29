
using System;

namespace OryxESS.Data.Infrastructure
{
    public interface IDbFactory: IDisposable
    {
        OryxESSContext Init();
    }
    
}