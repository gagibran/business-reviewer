namespace BusinessReviewer.Infrastructure.Data;

public class ApplicationDBContextSeeds
{
    public static async Task SeedDataToDBAsync(ApplicationDBContext applicationDBContext)
    {

        // Stops executing if the database has data already:
        if (applicationDBContext.Reviews.Any()) return;

        var reviews = new List<Review>
        {
            new Review
            {
                Id = Guid.NewGuid(),
                BusinessType = "Restaurant",
                BusinessAddress = "Lorem Ipsum Street 1",
                BusinessLatitude = 0,
                BusinessLongitude = 0,
                ReviewerUsername = "customer1",
                ReviewerName = "Customer 1",
                ReviewTitle = "Lorem Ipsum 1 Rocks!",
                ReviewGrade = 4.78,
                ReviewDescription = "Lorem Ipsum 1",
                DateCreated = DateTime.Now
            },
            new Review
            {
                Id = Guid.NewGuid(),
                BusinessType = "Restaurant",
                BusinessAddress = "Lorem Ipsum Street 2",
                BusinessLatitude = 0,
                BusinessLongitude = 0,
                ReviewerUsername = "customer2",
                ReviewerName = "Customer 2",
                ReviewTitle = "Lorem Ipsum 2 Sucks!",
                ReviewGrade = 1.43,
                ReviewDescription = "Lorem Ipsum 2",
                DateCreated = DateTime.Now
            },
            new Review
            {
                Id = Guid.NewGuid(),
                BusinessType = "Restaurant",
                BusinessAddress = "Lorem Ipsum Street 3",
                BusinessLatitude = 0,
                BusinessLongitude = 0,
                ReviewerUsername = "customer3",
                ReviewerName = "Customer 3",
                ReviewTitle = "Lorem Ipsum 3 is meh.",
                ReviewGrade = 2.56,
                ReviewDescription = "Lorem Ipsum 3",
                DateCreated = DateTime.Now
            },
            new Review
            {
                Id = Guid.NewGuid(),
                BusinessType = "Restaurant",
                BusinessAddress = "Lorem Ipsum Street 4",
                BusinessLatitude = 0,
                BusinessLongitude = 0,
                ReviewerUsername = "customer4",
                ReviewerName = "Customer 4",
                ReviewTitle = "Lorem Ipsum 4 is OK.",
                ReviewGrade = 3.29,
                ReviewDescription = "Lorem Ipsum 4",
                DateCreated = DateTime.Now
            }
        };

        await applicationDBContext.Reviews.AddRangeAsync(reviews);
        await applicationDBContext.SaveChangesAsync();
    }
}
