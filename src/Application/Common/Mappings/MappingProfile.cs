namespace Application.Common.Mappings;

// AutoMapper maps equivalent properties from different objects.
// It needs to be added as a service in the Program class.
public class MappingProfile : Profile
{
    public MappingProfile()
    {
        // Maps different objects with the "Review" signature.
        // Here I'm ignoring some properties that doesn't make sense to be updated in a PUT request.
        CreateMap<Review, Review>()
            .ForMember(destinationMember => destinationMember.Id, memberOptions => memberOptions.Ignore())
            .ForMember(destinationMember => destinationMember.BusinessName, memberOptions => memberOptions.Ignore())
            .ForMember(destinationMember => destinationMember.BusinessType, memberOptions => memberOptions.Ignore())
            .ForMember(destinationMember => destinationMember.BusinessAddress, memberOptions => memberOptions.Ignore())
            .ForMember(destinationMember => destinationMember.BusinessLatitude, memberOptions => memberOptions.Ignore())
            .ForMember(destinationMember => destinationMember.BusinessLongitude, memberOptions => memberOptions.Ignore())
            .ForMember(destinationMember => destinationMember.ReviewerUsername, memberOptions => memberOptions.Ignore())
            .ForMember(destinationMember => destinationMember.ReviewerName, memberOptions => memberOptions.Ignore())
            .ForMember(destinationMember => destinationMember.DateCreated, memberOptions => memberOptions.Ignore());
    }
}
