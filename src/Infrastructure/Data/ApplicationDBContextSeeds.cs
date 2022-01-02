namespace BusinessReviewer.Infrastructure.Data;

public class ApplicationDBContextSeeds
{
    public static async Task SeedReviews(ApplicationDBContext applicationDBContext)
    {
        // Stops executing if the database has data already.
        if (applicationDBContext.Reviews.Any()) return;

        // Otherwise, seeds data to the DB.
        var reviews = new List<Review>
        {
            new Review
            {
                Id = Guid.NewGuid(),
                BusinessId = Guid.NewGuid(),
                ReviewerId = Guid.NewGuid(),
                ReviewTitle = "Lorem Ipsum 1 is Meh.",
                ReviewGrade = 3,
                ReviewDescription = "Lorem Ipsum 1 is ok, but there are better places.",
                DateCreated = DateTime.Now
            },
            new Review
            {
                Id = Guid.NewGuid(),
                BusinessId = Guid.NewGuid(),
                ReviewerId = Guid.NewGuid(),
                ReviewTitle = "Lorem Ipsum 2 Sucks!",
                ReviewGrade = 1,
                ReviewDescription = "Lorem Ipsum 2 is terrible!",
                DateCreated = DateTime.Now
            },
            new Review
            {
                Id = Guid.NewGuid(),
                BusinessId = Guid.NewGuid(),
                ReviewerId = Guid.NewGuid(),
                ReviewTitle = "Lorem Ipsum 3 Rocks!",
                ReviewGrade = 5,
                ReviewDescription = "Lorem Ipsum 3 is awesome!",
                DateCreated = DateTime.Now
            },
            new Review
            {
                Id = Guid.NewGuid(),
                BusinessId = Guid.NewGuid(),
                ReviewerId = Guid.NewGuid(),
                ReviewTitle = "Lorem Ipsum 4 is nice",
                ReviewGrade = 4,
                ReviewDescription = "Lorem Ipsum 4 is an OK place.",
                DateCreated = DateTime.Now
            },
        };
        await applicationDBContext.Reviews.AddRangeAsync(reviews);
        await applicationDBContext.SaveChangesAsync();
    }
}
