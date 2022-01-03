namespace BusinessReviewer.Application.Businesses.Commands;

public class CreateBusinessCommand : IRequest<Business>
{
    public Business Business { get; set; }
}
