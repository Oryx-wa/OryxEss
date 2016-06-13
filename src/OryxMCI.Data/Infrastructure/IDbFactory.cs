
using System;

namespace OryxMCI.Data.Infrastructure
{
    public interface IDbFactory: IDisposable
    {
        OryxMCIContext Init();
    }
    
}