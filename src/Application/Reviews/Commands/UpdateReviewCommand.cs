namespace BusinessReviewer.Application.Reviews.Commands;

// Since we won't be returning the object that is being updated (we only need an HTTP 204), we don't
// pass "Review" as a generic type to IRequest and, consequentially, to IRequestHandler:
public class UpdateReviewCommand : IRequest
{
    public Guid Id { get; set; }
    public Review Review { get; set; }
}
