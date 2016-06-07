using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Builder;

namespace OryxESS.Data
{
    public class Startup
    {
        public static IConfigurationRoot Configuration;

        public void Configure(IApplicationBuilder app)
        {
            // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        }
        public Startup(Microsoft.Extensions.PlatformAbstractions.ApplicationEnvironment appEnv)
        {
            var builder = new ConfigurationBuilder()
              .SetBasePath(appEnv.ApplicationBasePath)
              .AddJsonFile("config.json")
              .AddEnvironmentVariables();

            Configuration = builder.Build();
        }
    }
}
