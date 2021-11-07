using BusinessReviewer.Application.Common.Interfaces;
using BusinessReviewer.Application.Reviews.Queries;
using BusinessReviewer.Infrastructure.Data;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Application.Common.Mappings;

namespace BusinessReviewer.WebUI
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment hostEnvironment)
        {
            Configuration = configuration;
            HostEnvironment = hostEnvironment;
        }

        public IConfiguration Configuration { get; }
        public IWebHostEnvironment HostEnvironment { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();

            services.AddDbContext<ApplicationDBContext>(options =>
            {
                if (HostEnvironment.IsDevelopment())
                {
                    options.UseSqlite(Configuration.GetConnectionString("ReviewsSqlite"));
                }
            });

            // Ensuring that the front-end can fetch the API:
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyMethod().AllowAnyHeader();
                    if (HostEnvironment.IsDevelopment())
                    {
                        policy.WithOrigins("http://localhost:3000");
                    }
                });
            });

            services.AddScoped<IApplicationDBContext, ApplicationDBContext>();

            // We need to specify the assembly where all of our queries are located:
            services.AddMediatR(typeof(GetReviewsQueryHandler).Assembly);

            // We need to specify the assembly where all of our mapping profiles are located:
            services.AddAutoMapper(typeof(MappingProfile).Assembly);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {
            if (HostEnvironment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            // Adding CORS AFTER routing (the order is important!)
            app.UseCors("CorsPolicy");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
