using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IdentityModel.Client;

namespace TestIdentityServer
{
    class Program
    {
        static void Main(string[] args)
        {
            var response = GetClientToken();
            Console.WriteLine(response.ToString());
        }
        static TokenResponse GetClientToken()
        {
            var client = new TokenClient(
                "http://localhost:5001/connect/token",
                "silicon",
                "F621F470-9731-4A25-80EF-67A6F7C5F4B8");

            return client.RequestClientCredentialsAsync("Oryx").Result;
        }
    }
}
