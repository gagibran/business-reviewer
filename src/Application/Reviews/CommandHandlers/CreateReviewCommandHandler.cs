namespace BusinessReviewer.Application.Reviews.CommandHandlers;

public class CreateReviewCommandHandler : IRequestHandler<CreateReviewCommand, Review>
{
    private readonly IApplicationDBContext _applicationDBContext;

    public CreateReviewCommandHandler(IApplicationDBContext applicationDBContext)
    {
        _applicationDBContext = applicationDBContext;
    }

    public async Task<Review> Handle(CreateReviewCommand request, CancellationToken cancellationToken)
    {
        Review review = request.Review;
        Review reviewCreated = new()
        {
            Id = Guid.NewGuid(),
            BusinessId = review.BusinessId,
            ReviewerId = review.ReviewerId,
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
