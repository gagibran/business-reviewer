namespace BusinessReviewer.Application.Businesses.CommandHandlers;

public class CreateBusinessCommandHandler : IRequestHandler<CreateBusinessCommand, Business>
{
    private readonly IApplicationDBContext _applicationDBContext;

    public CreateBusinessCommandHandler(IApplicationDBContext applicationDBContext)
    {
        _applicationDBContext = applicationDBContext;
    }

    public async Task<Business> Handle(CreateBusinessCommand request, CancellationToken cancellationToken)
    {
        Business business = request.Business;
        var businessCreated = new Business
        {
            Id = Guid.NewGuid(),
            UserId = business.UserId,
            BusinessName = business.BusinessName,
            BusinessAddress = business.BusinessAddress,
            BusinessType = business.BusinessType,
            BusinessLatitude = business.BusinessLatitude,
            BusinessLongitude = business.BusinessLongitude,
            DateCreated = DateTime.Now
        };

        // Since we're not yet adding data to a true database, we're using SQLite (in-memory),
        // we can't use AddAsync() here.
        _applicationDBContext.Businesses.Add(businessCreated);

        await _applicationDBContext.SaveChangesAsync();

        return businessCreated;
    }
}
