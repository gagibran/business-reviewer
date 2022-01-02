namespace BusinessReviewer.Domain.Entities;

public class Review : BaseEntity
{
    public Guid ReviewerId { get; set; }
    public Guid BusinessId { get; set; }
    public string ReviewTitle { get; set; }
    public int ReviewGrade { get; set; }
    public string ReviewDescription { get; set; }
}
