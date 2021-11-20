using System;
using System.Threading;
using System.Threading.Tasks;
using BusinessReviewer.Application.Common.Interfaces;
using BusinessReviewer.Domain.Entities;
using MediatR;

namespace BusinessReviewer.Application.Reviews.Commands
{
    public class CreateReviewCommand : IRequest<Review>
    {
        public Review Review { get; set; }
    }

    public class CreateReviewCommandHandler : IRequestHandler<CreateReviewCommand, Review>
    {
        private readonly IApplicationDBContext _applicationDBContext;

        public CreateReviewCommandHandler(IApplicationDBContext applicationDBContext)
        {
            _applicationDBContext = applicationDBContext;
        }

        public async Task<Review> Handle(CreateReviewCommand request, CancellationToken cancellationToken)
        {
            var review = request.Review;
            Review reviewCreated = new()
            {
                Id = Guid.NewGuid(),
                BusinessName = review.BusinessName,
                BusinessType = review.BusinessType,
                BusinessAddress = review.BusinessAddress,
                BusinessLatitude = review.BusinessLatitude,
                BusinessLongitude = review.BusinessLongitude,
                ReviewerUsername = review.ReviewerUsername,
                ReviewerName = review.ReviewerName,
                ReviewTitle = review.ReviewTitle,
                ReviewGrade = review.ReviewGrade,
                ReviewDescription = review.ReviewDescription,
                DateCreated = DateTime.Now
            };

            // Since we're not yet adding data to a true database, we're using SQLite (in-memory),
            // we can't use AddAsync() here.
            _applicationDBContext.Reviews.Add(reviewCreated);

            await _applicationDBContext.SaveChangesAsync();

            return reviewCreated;
        }
    }
}