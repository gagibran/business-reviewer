namespace BusinessReviewer.Application.Businesses.Queries;

public class GetBusinessQuery : IRequest<Business>
{
    public Guid Id { get; set; }
}
