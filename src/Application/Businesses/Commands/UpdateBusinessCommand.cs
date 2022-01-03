namespace BusinessReviewer.Application.Businesses.Commands;

// Since we won't be returning the object that is being updated (we only need an HTTP 204), we don't
// pass "Business" as a generic type to IRequest and, consequentially, to IRequestHandler:
public class UpdateBusinessCommand : IRequest
{
    public Guid Id { get; set; }
    public Business Business { get; set; }
}
