using IdentityServer4.Core.Models;
using System.Collections.Generic;

namespace Host.Configuration
{
    public class Clients
    {
        public static IEnumerable<Client> Get()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientId = "mvc",
                    ClientName = "MVC Hybrid Client",
                    AllowedGrantTypes = GrantTypes.Hybrid,
                    AllowAccessTokensViaBrowser = true,
                    RedirectUris = new List<string>
                    {
                        "http://localhost:3308/signin-oidc"
                    },

                    PostLogoutRedirectUris = new List<string>
                    {
                        "http://localhost:3308/"
                    },

                    ClientSecrets = new List<Secret>
                    {
                        new Secret("secret".Sha256())
                    },

                    AllowedScopes = new List<string>
                    {
                        StandardScopes.OpenId.Name,
                        StandardScopes.Profile.Name,
                        "api1"
                    }
                },
                new Client
                {
                    ClientId = "OryxESS.webapi",
                    ClientName = "Oyrx Self Service",
                    //Enabled = true,
                    AllowedGrantTypes = GrantTypes.Implicit,
                    AllowAccessTokensViaBrowser = true,
                    //ClientSecrets = new List<Secret>
                    //{
                    //    new Secret("F621F470-9731-4A25-80EF-67A6F7C5F4B8".Sha256())
                    //},
                   RedirectUris = new List<string>
                    {
                        "http://localhost:3000"

                    },
                    PostLogoutRedirectUris = new List<string>
                    {
                        "http://localhost:3000/Unauthorized.html"
                    },
                    AllowedScopes = new List<string>
                    {
                         "openid",
                        "email",
                        "profile",
                        "OryxESS.webapi"
                    },
                    //AllowAccessToAllScopes = true,
                    AllowedCorsOrigins = new List<string>
                    {
                        
                        "http://localhost:3000"
                    }
                },
                new Client
                {
                    ClientId = "OryxMCI.webapi",
                    ClientName = "MCI",
                    Enabled = true,
                    AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,
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
                new Client
                {
                    ClientId = "socialnetwork",
                    ClientSecrets = new List<Secret>
                    {
                        new Secret("secret".Sha256())
                    },
                    ClientName = "SocialNetwork",
                    AllowedGrantTypes = GrantTypes.ClientCredentials,
                    AllowedScopes = new List<string>
                    {
                        StandardScopes.OpenId.Name,
                        "read"
                    },
                    Enabled = true
                }

            };
        }
    }
}