namespace BusinessReviewer.Application.Reviews.CommandHandlers;

public class UpdateReviewCommandHandler : IRequestHandler<UpdateReviewCommand>
{
    private readonly IApplicationDBContext _applicationDBContext;
    private readonly IMapper _mapper;

    public UpdateReviewCommandHandler(IApplicationDBContext applicationDBContext, IMapper mapper)
    {
        _applicationDBContext = applicationDBContext;
        _mapper = mapper;
    }

    // Since we don't return a "Review" object, this method will return a MediatR.Unit object, which
    // is essentially just an empty object stating that the operation was successfull:
    public async Task<Unit> Handle(UpdateReviewCommand request, CancellationToken cancellationToken)
    {
        Review reviewUpdated = await _applicationDBContext.Reviews.FindAsync(request.Id);

        if (reviewUpdated is null) throw new NotFoundException();

        // Using AutoMapper to create a similar result as:
        // reviewUpdated.ReviewTitle = request.Review.ReviewTitle;
        // reviewUpdated.ReviewGrade = request.Review.ReviewGrade;
        // reviewUpdated.ReviewDescription = request.Review.ReviewDescription;
        _mapper.Map(request.Review, reviewUpdated);

        await _applicationDBContext.SaveChangesAsync();

        return Unit.Value;
    }
}
