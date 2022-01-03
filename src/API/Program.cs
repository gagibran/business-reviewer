using Microsoft.EntityFrameworkCore;
using BusinessReviewer.Infrastructure.Data;
using BusinessReviewer.Application.Common.Mappings;
using BusinessReviewer.Application.Common.Interfaces;
using BusinessReviewer.Application.Businesses.QueryHandlers;
using BusinessReviewer.Application.Reviews.QueryHandlers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddDbContext<ApplicationDBContext>(options =>
{
    if (builder.Environment.IsDevelopment())
    {
        options.UseSqlite(builder.Configuration.GetConnectionString("BusinessReviewSqlite"));
    }
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", policy =>
    {
        policy.AllowAnyMethod().AllowAnyHeader();

        // The frontend's origin.
        if (builder.Environment.IsDevelopment()) policy.WithOrigins("http://localhost:3000");
    });
});

builder.Services.AddScoped<IApplicationDBContext, ApplicationDBContext>();

// We need to specify the assembly where all of our queries are located.
builder.Services.AddMediatR(typeof(GetReviewsQueryHandler).Assembly);
builder.Services.AddMediatR(typeof(GetBusinessesQueryHandler).Assembly);

// We need to specify the assembly where all of our mapping profiles are located.
builder.Services.AddAutoMapper(typeof(MappingProfile).Assembly);

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseHttpsRedirection();

app.UseRouting();

// Adding CORS AFTER routing (the order is important!)
app.UseCors("CorsPolicy");

app.UseAuthorization();

app.MapControllers();

if (app.Environment.IsDevelopment())
{
    // Creates the databases (and their tables) from a seed if they don't exist.
    // This replaces: dotnet ef database update.
    using var scope = app.Services.CreateScope();
    var services = scope.ServiceProvider;
    try
    {
        var applicationDBContext = services.GetRequiredService<ApplicationDBContext>();
        await applicationDBContext.Database.MigrateAsync();
        await ApplicationDBContextSeeds.SeedReviews(applicationDBContext);
    }
    catch (Exception exception)
    {
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError(exception, "An error ocurred during migration.");
    }
}

await app.RunAsync();
