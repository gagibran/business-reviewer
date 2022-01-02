namespace BusinessReviewer.Application.Businesses.Commands;

public class DeleteBusinessCommand : IRequest
{
    public Guid Id { get; set; }
}

public class DeleteBusinessCommandHandler : IRequestHandler<DeleteBusinessCommand>
{
    private readonly IApplicationDBContext _applicationDBContext;

    public DeleteBusinessCommandHandler(IApplicationDBContext applicationDBContext)
    {
        _applicationDBContext = applicationDBContext;
    }

    public async Task<Unit> Handle(DeleteBusinessCommand request, CancellationToken cancellationToken)
    {
        var businessDeleted = await _applicationDBContext.Businesses.FindAsync(request.Id);

        if (businessDeleted is null) throw new NotFoundException();

        _applicationDBContext.Businesses.Remove(businessDeleted);

        await _applicationDBContext.SaveChangesAsync();

        return Unit.Value;
    }
}