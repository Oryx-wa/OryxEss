using IdentityServer4.Core.Models;
using System.Collections.Generic;

namespace Host.Configuration
{
    public class Scopes
    {
        public static IEnumerable<Scope> Get()
        {
            return new List<Scope>
            {
                StandardScopes.OpenId,
                StandardScopes.Profile,

                new Scope
                {
                    Name = "api1",
                    DisplayName = "API 1",
                    Description = "API 1 features and data",
                    Type = ScopeType.Resource
                },
                 new Scope
                {
                    Name = "OryxESS.webapi",
                    DisplayName = "Oryx Employee Self Service web api",
                    Description = "Business Logic for Oryx ESS",
                    Type = ScopeType.Resource,

                    ScopeSecrets = new List<Secret>
                    {
                        new Secret("Oryxsecret".Sha256())
                    },
                    Claims = new List<ScopeClaim>
                    {
                        new ScopeClaim("role"),
                        new ScopeClaim("OryxESS")
                    }

                },
                 new Scope
                {
                    Name = "OryxMCI.webapi",
                    DisplayName = "African Circle MCI Application",
                    Description = "Business Logic for African Circle MCI Application",
                    Type = ScopeType.Resource,

                    ScopeSecrets = new List<Secret>
                    {
                        new Secret("Oryxsecret".Sha256())
                    },
                    Claims = new List<ScopeClaim>
                    {
                        new ScopeClaim("role"),
                        new ScopeClaim("OryxMCI")
                    }

                },


                new Scope
                {
                    Name = "read",
                    DisplayName = "Read User Data"
                }
            };
        }
    }
}