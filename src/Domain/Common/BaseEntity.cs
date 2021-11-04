using System;

namespace BusinessReviewer.Domain.Common
{
    public class BaseEntity
    {
        public Guid Id { get; set; }
        public DateTime DateCreated { get; set; }
    }
}