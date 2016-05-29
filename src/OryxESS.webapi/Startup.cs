using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using OryxESS.Data.Repositories;
using OryxESS.Entities;
using Newtonsoft.Json.Serialization;
using AutoMapper;
using OryxESS.webapi.ViewModels;
using OryxESS.Data;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Microsoft.Data.Entity;
using OryxESS.Data.Infrastructure;
using OryxESS.webapi.Controllers;

namespace OryxESS.webapi
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            // Set up configuration sources.
            var builder = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json");
                

            if (env.IsEnvironment("Development"))
            {
                // This will push telemetry data through Application Insights pipeline faster, allowing you to view results immediately.
                builder.AddApplicationInsightsSettings(developerMode: true);
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build().ReloadOnChanged("appsettings.json");
        }

        public IConfigurationRoot Configuration { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddApplicationInsightsTelemetry(Configuration);

           services.AddMvc(config =>
      {
#if !DEBUG
        config.Filters.Add(new RequireHttpsAttribute());
#endif
      })
      .AddJsonOptions(opt =>
      {
        opt.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
      });
            services.AddEntityFramework()
                .AddSqlServer()
                .AddDbContext<OryxESSContext>(options =>
            options.UseSqlServer(Configuration["Data:DefaultConnection:OryxESSConnectionString"]));


            //services.AddTransient<IEntityBaseRepository<Employee>>();
            services.AddTransient<EmployeeController>();

            var builder = new ContainerBuilder();

            services.AddLogging();
            services.AddTransient<IEntityBaseRepository<Employee>, EntityBaseRepository<Employee>>();
            services.AddTransient<IEntityBaseRepository<Error>, EntityBaseRepository<Error>>();
            services.AddTransient<SeedData>();



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
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, SeedData SeedData)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseIISPlatformHandler();

            app.UseApplicationInsightsRequestTelemetry();

            app.UseApplicationInsightsExceptionTelemetry();

            app.UseStaticFiles();

            Mapper.Initialize(config =>
            {
                config.CreateMap<Employee, EmployeeViewModel>().ReverseMap();
                config.CreateMap<Employee, EmployeeListViewModel>().ReverseMap();

            });

            app.UseMvc(config =>
            {
                config.MapRoute(
                  name: "Default",
                  template: "{controller}/{action}/{id?}"                  
                  );
            });

            SeedData.EnsureSeedData();

        }

        // Entry point for the application.
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
