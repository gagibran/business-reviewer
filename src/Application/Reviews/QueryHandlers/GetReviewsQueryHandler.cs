namespace BusinessReviewer.Application.Reviews.QueryHandlers;

public class GetReviewsQueryHandler : IRequestHandler<GetReviewsQuery, List<Review>>
{
    IApplicationDBContext _applicationDbContext;
    public GetReviewsQueryHandler(IApplicationDBContext applicationDbContext)
    {
        _applicationDbContext = applicationDbContext;
    }

    // The first argument is the query. The second one, the cancellation token, 
    // gives us the ability to cancel an ongoing request (i.e. pressing ESC or closing the browser
    // mid process). We get this token from the handler and can pass it to a query or a command.
    // In the controller,we need to pass a new CancellationToken as Send()'s second parameter as well.
    // Here we can call methods such as cancellationToken.ThrowIfCancellationRequested(), which throws a
    // System.OperationCanceledException and handle it.
    // We won't be using this as of right now.
    // This will be used in the controllers in WebUI, instead of directly calling the DB context there.
    public async Task<List<Review>> Handle(GetReviewsQuery request, CancellationToken cancellationToken)
    {
        return await _applicationDbContext.Reviews.ToListAsync();
    }
}
