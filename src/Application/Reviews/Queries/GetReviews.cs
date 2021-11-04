using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using BusinessReviewer.Application.Common.Interfaces;
using BusinessReviewer.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;


// Both classes are on the same file to improve discoverability.
namespace BusinessReviewer.Application.Reviews.Queries
{
    public class GetReviewsQuery : IRequest<List<Review>>
    {
    }

    public class GetReviewsQueryHandler : IRequestHandler<GetReviewsQuery, List<Review>>
    {
        IApplicationDBContext _applicationDbContext;
        public GetReviewsQueryHandler(IApplicationDBContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        // The first argument is the query. The second one will be explained later.
        // This will be used in the controllers in WebUI, instead of directly calling the DB context there.
        public async Task<List<Review>> Handle(GetReviewsQuery request, CancellationToken cancellationToken)
        {
            return await _applicationDbContext.Reviews.ToListAsync();
        }
    }
}