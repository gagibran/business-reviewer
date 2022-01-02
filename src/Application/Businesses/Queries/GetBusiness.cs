namespace BusinessReviewer.Application.Businesses.Queries;

public class GetBusinessQuery : IRequest<Business>
{
    public Guid Id { get; set; }
}

public class GetBusinessQueryHandler : IRequestHandler<GetBusinessQuery, Business>
{
    private readonly IApplicationDBContext _applicationDBContext;

    public GetBusinessQueryHandler(IApplicationDBContext applicationDBContext)
    {
        _applicationDBContext = applicationDBContext;
    }

    // Since the first argument is the query, we can access a Business's ID (denoted by the property inside that class)
    // with request.Id.
    public async Task<Business> Handle(GetBusinessQuery request, CancellationToken cancellationToken)
    {
        return await _applicationDBContext.Businesses.FindAsync(request.Id);
    }
}
