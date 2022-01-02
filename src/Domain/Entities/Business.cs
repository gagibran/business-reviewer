namespace BusinessReviewer.Domain.Entities;

public class Business : BaseEntity
{
    public Guid UserId { get; set; }
    public string BusinessName { get; set; }
    public string BusinessAddress { get; set; }
    public string BusinessType { get; set; }
    public double BusinessLatitude { get; set; }
    public double BusinessLongitude { get; set; }
}
