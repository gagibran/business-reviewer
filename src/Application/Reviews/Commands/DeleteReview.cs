namespace BusinessReviewer.Application.Reviews.Commands;

public class DeleteReviewCommand : IRequest
{
    public Guid Id { get; set; }
}

public class DeleteReviewCommandHandler : IRequestHandler<DeleteReviewCommand>
{
    private readonly IApplicationDBContext _applicationDBContext;

    public DeleteReviewCommandHandler(IApplicationDBContext applicationDBContext)
    {
        _applicationDBContext = applicationDBContext;
    }

    public async Task<Unit> Handle(DeleteReviewCommand request, CancellationToken cancellationToken)
    {
        var reviewDeleted = await _applicationDBContext.Reviews.FindAsync(request.Id);

        if (reviewDeleted is null) throw new NotFoundException();

        _applicationDBContext.Reviews.Remove(reviewDeleted);

        await _applicationDBContext.SaveChangesAsync();

        return Unit.Value;
    }
}