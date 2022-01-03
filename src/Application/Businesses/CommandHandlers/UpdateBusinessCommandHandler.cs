namespace BusinessReviewer.Application.Businesses.CommandHandlers;

public class UpdateBusinessCommandHandler : IRequestHandler<UpdateBusinessCommand>
{
    private readonly IApplicationDBContext _applicationDBContext;
    private readonly IMapper _mapper;

    public UpdateBusinessCommandHandler(IApplicationDBContext applicationDBContext, IMapper mapper)
    {
        _applicationDBContext = applicationDBContext;
        _mapper = mapper;
    }

    // Since we don't return a "Business" object, this method will return a MediatR.Unit object, which
    // is essentially just an empty object stating that the operation was successfull:
    public async Task<Unit> Handle(UpdateBusinessCommand request, CancellationToken cancellationToken)
    {
        var businessUpdated = await _applicationDBContext.Businesses.FindAsync(request.Id);

        if (businessUpdated is null) throw new NotFoundException();

        // Using AutoMapper to create a similar result as:
        // businessUpdated.BusinessTitle = request.Business.BusinessAddress;
        // businessUpdated.BusinessGrade = request.Business.BusinessType;
        _mapper.Map(request.Business, businessUpdated);

        await _applicationDBContext.SaveChangesAsync();

        return Unit.Value;
    }
}
