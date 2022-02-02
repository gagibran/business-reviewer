namespace BusinessReviewer.Application.Reviews.CommandHandlers;

public class DeleteReviewCommandHandler : IRequestHandler<DeleteReviewCommand>
{
    private readonly IApplicationDBContext _applicationDBContext;

    public DeleteReviewCommandHandler(IApplicationDBContext applicationDBContext)
    {
        _applicationDBContext = applicationDBContext;
    }

    public async Task<Unit> Handle(DeleteReviewCommand request, CancellationToken cancellationToken)
    {
        Review reviewDeleted = await _applicationDBContext.Reviews.FindAsync(request.Id);

        if (reviewDeleted is null) throw new NotFoundException();

        _applicationDBContext.Reviews.Remove(reviewDeleted);

        await _applicationDBContext.SaveChangesAsync();

        return Unit.Value;
    }
}
