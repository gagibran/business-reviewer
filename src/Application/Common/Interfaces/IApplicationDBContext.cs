namespace BusinessReviewer.Application.Common.Interfaces;

public interface IApplicationDBContext
{
    DbSet<Review> Reviews { get; set; }

    DbSet<Business> Businesses { get; set; }

    // This comes from Microsoft.EntityFrameworkCore.DbContext. Thus, it has to be specified here.
    // Setting the cancellation token to default is the same as creating an empty object.
    // More info: https://docs.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken.none?view=netstandard-2.0#remarks
    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}
