namespace BusinessReviewer.Domain.Entities;

public class Review : BaseEntity
{
    public string? BusinessName { get; set; }
    public string? BusinessType { get; set; }
    public string? BusinessAddress { get; set; }
    public double BusinessLatitude { get; set; }
    public double BusinessLongitude { get; set; }
    public string? ReviewerUsername { get; set; }
    public string? ReviewerName { get; set; }
    public string? ReviewTitle { get; set; }
    public double ReviewGrade { get; set; }
    public string? ReviewDescription { get; set; }
}
