namespace BusinessReviewer.Application.Reviews.Queries;

public class GetReviewQuery : IRequest<Review>
{
    public Guid Id { get; set; }
}
