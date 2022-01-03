namespace BusinessReviewer.Application.Reviews.Commands;

public class DeleteReviewCommand : IRequest
{
    public Guid Id { get; set; }
}
