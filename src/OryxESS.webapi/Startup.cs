using System;

using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using OryxESS.Data.Repositories;
using Newtonsoft.Json.Serialization;
using OryxESS.Data;
using Autofac;
using Autofac.Extensions.DependencyInjection;
//using Microsoft.Data.Entity;
using OryxESS.Data.Infrastructure;
using OryxESS.webapi.Controllers;
//using System.IdentityModel.Tokens.Jwt;
//using Microsoft.AspNet.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Builder;
using System.IdentityModel.Tokens.Jwt;
//using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;

namespace OryxESS.webapi
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            // Set up configuration sources.
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json")
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);




            if (env.IsEnvironment("Development"))
            {
                // This will push telemetry data through Application Insights pipeline faster, allowing you to view results immediately.
                builder.AddApplicationInsightsSettings(developerMode: true);
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {

            services.AddCors();
            // Add framework services.
            services.AddApplicationInsightsTelemetry(Configuration);

            var guestPolicy = new AuthorizationPolicyBuilder()
                .RequireAuthenticatedUser()
                .RequireClaim("scope", "OryxESS.webapi")
                .Build();

            services.AddAuthorization(options =>
            {

                options.AddPolicy("OryxESSAdmin", policyAdmin =>
                {
                    policyAdmin.RequireClaim("role", "OryxESS.admin");
                });
                options.AddPolicy("OryxESSUser", policyUser =>
                {
                    policyUser.RequireClaim("role", "OryxESS.user");
                });

            });




            services.AddMvcCore(config =>
            {
#if !DEBUG
                    config.Filters.Add(new RequireHttpsAttribute());
#endif
                config.Filters.Add(new AuthorizeFilter(guestPolicy));
            })
           .AddJsonFormatters(opt =>
           {
               opt.ContractResolver = new CamelCasePropertyNamesContractResolver();
           });



            string conString = Configuration["Data:DefaultConnection:OryxESSConnectionString"];
            services.AddDbContext<OryxESSContext>(options => options.UseSqlServer(conString), ServiceLifetime.Scoped);


            services.AddTransient<EmployeeController>();

            var builder = new ContainerBuilder();

            services.AddLogging();
            //services.AddTransient<IEntityBaseRepository<Employee>, EntityBaseRepository<Employee>>();
            //services.AddTransient<IEntityBaseRepository<Error>, EntityBaseRepository<Error>>();
            //services.AddTransient<SeedData>();

            //services.AddTransient<ClaimsPrincipal>(
            //    s => s.GetService<IHttpContextAccessor>().HttpContext.User);


            builder.RegisterType<DbFactory>()
                .As<IDbFactory>()
                .InstancePerLifetimeScope();

            builder.RegisterType<UnitOfWork>()
                .As<IUnitOfWork>()
                .InstancePerLifetimeScope();

            builder.RegisterGeneric(typeof(EntityBaseRepository<>))
                   .As(typeof(IEntityBaseRepository<>))
                   .InstancePerLifetimeScope();


            builder.Populate(services);

            var container = builder.Build();
            return container.Resolve<IServiceProvider>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseCors(builder => builder.WithOrigins(
                 "http://localhost:5000",
                    "http://localhost:3000",
                    "http://localhost:4200",
                    "http://10.211.55.2:4200")
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    );

            

           

            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                try
                {
                    using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>()
                        .CreateScope())
                    {
                        serviceScope.ServiceProvider.GetService<OryxESSContext>()
                             .Database.Migrate();
                        serviceScope.ServiceProvider.GetService<OryxESSContext>().EnsureSeedData();
                    }
                }
                catch { }
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");

                // For more details on creating database during deployment see http://go.microsoft.com/fwlink/?LinkID=615859

            }

            //app.UseIISPlatformHandler();



            app.UseApplicationInsightsRequestTelemetry();

            app.UseApplicationInsightsExceptionTelemetry();

            app.UseStaticFiles();

            //Mapper.Initialize(config =>
            //{
            //    config.CreateMap<Employee, EmployeeViewModel>().ReverseMap();
            //    config.CreateMap<Employee, EmployeeListViewModel>().ReverseMap();

            //});

            //JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();

            //app.UseIdentityServerAuthentication(new IdentityServerAuthenticationOptions
            //{
            //    Authority = "http://localhost:5000",
            //    RequireHttpsMetadata = false,
            //    ScopeName = "OryxESS.webapi",
            //    AutomaticAuthenticate = true
            //});

            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();

            app.UseJwtBearerAuthentication(new JwtBearerOptions
            {
                Authority = "http://localhost:5000",
                Audience = "http://localhost:5000/resources",
                RequireHttpsMetadata = false,

                AutomaticAuthenticate = true,

                TokenValidationParameters = new TokenValidationParameters
                {
                    NameClaimType = "name",
                    RoleClaimType = "role"
                }
            });

            app.UseJwtBearerAuthentication(new JwtBearerOptions
            {
                Authority = "http://10.211.55.5:5000",
                Audience = "http://10.211.55.5:5000/resources",
                RequireHttpsMetadata = false,

                AutomaticAuthenticate = true,

                TokenValidationParameters = new TokenValidationParameters
                {
                    NameClaimType = "name",
                    RoleClaimType = "role"
                }
            });

            app.UseMvc(config =>
            {
                config.MapRoute(
                  name: "Default",
                  template: "{controller}/{action}/{id?}"
                  );
            });

            //SeedData.EnsureSeedData();

        }

        // Entry point for the application.
        //public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
