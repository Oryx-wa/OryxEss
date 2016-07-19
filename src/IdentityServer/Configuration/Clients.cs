using IdentityServer4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentityServer.Configuration
{
    public class Clients
    {
        public static IEnumerable<Client> Get()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientId = "spa",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    AllowAccessTokensViaBrowser = true,
                    RequireConsent = false,
                    RedirectUris = new List<string>
                    {
                        "http://localhost:1861/spa/callback.html"
                    },
                    AllowedScopes = new List<string>
                    {
                        "openid", "profile",
                        "api.todo"
                    }
                },
                new Client
                {
                    ClientId = "OryxESS.webapi",
                    ClientName = "Oyrx Self Service",
                    //Enabled = true,
                    AllowedGrantTypes = GrantTypes.Implicit,
                    AllowAccessTokensViaBrowser = true,
                    RequireConsent = false,
                    //ClientSecrets = new List<Secret>
                    //{
                    //    new Secret("F621F470-9731-4A25-80EF-67A6F7C5F4B8".Sha256())
                    //},
                   RedirectUris = new List<string>
                    {
                        "http://localhost:3000",
                        "http://localhost:4200",
                        "http://10.211.55.2:4200"
                        

                    },
                    PostLogoutRedirectUris = new List<string>
                    {
                        "http://localhost:3000/Unauthorized.html",
                        "http://localhost:4200/Unauthorized.html",
                        "http://10.211.55.2:4200/Unauthorized.html",
                    },
                    AllowedScopes = new List<string>
                    {
                         "openid",
                        "email",
                        "profile",
                        "OryxESS.webapi"
                    },
                    AllowedCorsOrigins = new List<string>
                    {

                        "http://localhost:3000",
                        "http://localhost:4200",
                        "http://10.211.55.2:4200"
                    }
                },
                 new Client
                {
                    ClientId = "OryxMCI.webapi",
                    ClientName = "MCI",
                    Enabled = true,
                    AllowedGrantTypes = GrantTypes.Implicit,
                    RequireConsent = false,
                    ClientSecrets = new List<Secret>
                    {
                        new Secret("F621F470-9731-4A25-80EF-67A6F7C5F4B8".Sha256())
                    },
                    RedirectUris = new List<string>
                    {
                        "https://www.getpostman.com/oauth2/callback"
                    },
                    AllowedScopes = new List<string>
                    {
                        StandardScopes.OpenId.Name,
                        StandardScopes.Profile.Name,
                        StandardScopes.OfflineAccess.Name,
                        "read",
                        "OryxMCI.webapi"
                    },
                    AllowedCorsOrigins = new List<string>
                    {
                        "https://localhost:44311",
                        "http://localhost:44311"
                    }
                },

            };
        }
    }
}
