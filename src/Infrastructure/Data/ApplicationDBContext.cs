using BusinessReviewer.Application.Common.Interfaces;

namespace BusinessReviewer.Infrastructure.Data;

public class ApplicationDBContext : DbContext, IApplicationDBContext
{
    public ApplicationDBContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Review> Reviews { get; set; }
    public DbSet<Business> Businesses { get; set; }

    // Setting the cancellation token to default is the same as creating an empty object.
    // More info: https://docs.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken.none?view=netstandard-2.0#remarks
    public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        return await base.SaveChangesAsync(cancellationToken);
    }
}
