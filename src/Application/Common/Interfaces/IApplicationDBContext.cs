using System.Threading;
using System.Threading.Tasks;
using BusinessReviewer.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace BusinessReviewer.Application.Common.Interfaces
{
    public interface IApplicationDBContext
    {
        DbSet<Review> Reviews { get; set; }

        // This comes from Microsoft.EntityFrameworkCore.DbContext. Thus, it has to be specified here:
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
    }
}