using System;
using System.Threading;
using System.Threading.Tasks;
using BusinessReviewer.Application.Common.Interfaces;
using BusinessReviewer.Domain.Entities;
using MediatR;

namespace BusinessReviewer.Application.Reviews.Queries
{
    public class GetReviewQuery : IRequest<Review>
    {
        public Guid Id { get; set; }
    }

    public class GetReviewQueryHandler : IRequestHandler<GetReviewQuery, Review>
    {
        private readonly IApplicationDBContext _applicationDBContext;

        public GetReviewQueryHandler(IApplicationDBContext applicationDBContext)
        {
            _applicationDBContext = applicationDBContext;
        }

        // Since the first argument is the query, we can access a review's ID (denoted by the property inside that class)
        // with request.Id.
        public async Task<Review> Handle(GetReviewQuery request, CancellationToken cancellationToken)
        {
            return await _applicationDBContext.Reviews.FindAsync(request.Id);
        }
    }
}