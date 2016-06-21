using Host.Configuration;
using Host.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System.IO;
using System.Security.Cryptography.X509Certificates;
using IdentityServer4.Contrib.AspNetIdentity;
using IdentityServer.Models;
using IdentityServer.Data;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using IdentityServer4.Core;
using IdentityServer.Services;

namespace Host
{
    public class Startup
    {
        private readonly IHostingEnvironment _environment;
        public IConfigurationRoot Configuration { get; }
        public Startup(IHostingEnvironment env)
        {

            var builder = new ConfigurationBuilder()
               .SetBasePath(env.ContentRootPath)
               .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
               .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsDevelopment())
            {
                // For more details on using the user secret store see http://go.microsoft.com/fwlink/?LinkID=532709
                builder.AddUserSecrets();
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
            _environment = env;
        }


        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<ApplicationUser, IdentityRole>()
               .AddEntityFrameworkStores<ApplicationDbContext>()
               .AddDefaultTokenProviders();

            var cert = new X509Certificate2(Path.Combine(_environment.ContentRootPath, "idsrv3test.pfx"), "idsrv3test");

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            var builder = services.AddIdentityServer(options =>
            {
                options.SigningCertificate = cert;
            });

            builder.AddInMemoryClients(Clients.Get());
            builder.AddInMemoryScopes(Scopes.Get());
            //builder.AddInMemoryUsers(Users.Get());
            builder.ConfigureAspNetIdentity<ApplicationUser>();
            builder.AddCustomGrantValidator<CustomGrantValidator>();

            //services.AddMvc();
            // for the UI
            services
                .AddMvc();
            //.AddRazorOptions(razor =>
            //{
            //    razor.ViewLocationExpanders.Add(new UI.CustomViewLocationExpander());
            //}
            //);
            //services.AddTransient<UI.Login.LoginService>();

            // Add application services.
            services.AddTransient<IEmailSender, AuthMessageSender>();
            services.AddTransient<ISmsSender, AuthMessageSender>();
        }

        //public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {


            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();


            app.UseDeveloperExceptionPage();

            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationScheme = "Temp",
                AutomaticAuthenticate = false,
                AutomaticChallenge = false
            });




            //app.UseMvcWithDefaultRoute();

            app.UseIdentity();
            app.UseIdentityServer();

            app.UseStaticFiles();

            //app.UseMvc();
            //app.UseMvcWithDefaultRoute();
            app.UseMvc(routes =>
            {
                routes.MapRoute("ui/login", Constants.RoutePaths.Login,
               new { controller = "Login", action = "Login" });
                routes.MapRoute("Logout", Constants.RoutePaths.Logout,
                    new { controller = "Login", action = "LogOff" });

                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}