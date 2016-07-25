using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using OryxMCI.Data;
using OryxMCI.webapi.Controllers;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using OryxMCI.Data.Repositories;
using OryxMCI.Data.Repositories.defitem;
using OryxMCI.Entities;
using OryxMCI.Data.Infrastructure;
using System;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;


namespace OryxMCI.webapi
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsEnvironment("Development"))
            {
                // This will push telemetry data through Application Insights pipeline faster, allowing you to view results immediately.
                builder.AddApplicationInsightsSettings(developerMode: true);
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            // Add framework services.
            services.AddApplicationInsightsTelemetry(Configuration);

            var MCIPolicy = new AuthorizationPolicyBuilder()
                .RequireAuthenticatedUser()
                .RequireClaim("scope", "OryxMCI.webapi")
                .Build();

            services.AddAuthorization(options =>
            {

                options.AddPolicy("OryxMCIAdmin", policyAdmin =>
                {
                    policyAdmin.RequireClaim("role", "OryxMCI.admin");
                });
                options.AddPolicy("OryxMCIUser", policyUser =>
                {
                    policyUser.RequireClaim("role", "OryxMCI.user");
                });

            });

            services.AddMvcCore(config =>
            {                
               config.Filters.Add(new AuthorizeFilter(MCIPolicy));
            })
           .AddJsonFormatters(opt =>
           {
               opt.ContractResolver = new CamelCasePropertyNamesContractResolver();
           });

            services.AddMvc();

            string conString = Configuration["Data:DefaultConnection:OryxMCIConnectionString"];
           
            services.AddDbContext<OryxMCIContext>(options => options.UseSqlServer(conString, opt => opt.UseRowNumberForPaging()));

            

            var builder = new ContainerBuilder();

            services.AddLogging();            
            //services.AddTransient<SeedData>();

            var opt1 = new DbContextOptionsBuilder();
            opt1.UseSqlServer(conString);

            builder.RegisterType<OryxMCIContext>()
            .As<DbContext>()
            .WithParameter("options", opt1)
            .InstancePerLifetimeScope();

            builder.RegisterType<DbFactory>( )
                .As<IDbFactory>()
                .InstancePerLifetimeScope();

            builder.RegisterType<UnitOfWork>()
                .As<IUnitOfWork>()
                .InstancePerLifetimeScope();

            builder.RegisterGeneric(typeof(EntityBaseRepository<>))
                   .As(typeof(IEntityBaseRepository<>))
                   .InstancePerLifetimeScope();

            builder.RegisterGeneric(typeof(DefItemRepository<>))
                  .As(typeof(IDefItemRepository<>))
                  .InstancePerLifetimeScope();



            builder.RegisterType<SeedData>();         

            builder.Populate(services);

            var container = builder.Build();
            return container.Resolve<IServiceProvider>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory,  SeedData SeedData)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

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
                        serviceScope.ServiceProvider.GetService<OryxMCIContext>()
                             .Database.Migrate();
                    }
                }
                catch { }
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");

                // For more details on creating database during deployment see http://go.microsoft.com/fwlink/?LinkID=615859
                try
                {
                    using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>()
                        .CreateScope())
                    {
                        serviceScope.ServiceProvider.GetService<OryxMCIContext>()
                             .Database.Migrate();
                    }
                }
                catch { }
            }

            //app.UseIISPlatformHandler();

            app.UseCors(policy =>
            {
                policy.WithOrigins("http://localhost:5000", "http://localhost:4200");
                policy.AllowAnyHeader();
                policy.AllowAnyMethod();
            });


            app.UseApplicationInsightsRequestTelemetry();

            app.UseApplicationInsightsExceptionTelemetry();

            app.UseStaticFiles();



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

            app.UseMvc(config =>
            {
                config.MapRoute(
                  name: "Default",
                  template: "{controller}/{action}/{id?}"
                  );
            });

            SeedData.EnsureSeedData();

        }
    }
}
