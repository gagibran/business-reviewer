namespace BusinessReviewer.Application.Reviews.Commands;

public class CreateReviewCommand : IRequest<Review>
{
    public Review Review { get; set; }
}
