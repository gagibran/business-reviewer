using System;
using Domain.Common;

namespace Domain.Entities
{
    public class Review : BaseEntity
    {
        public string BusinessName { get; set; }
        public string BusinessType { get; set; }
        public string BusinessAddress { get; set; }
        public string ReviewerUsername { get; set; }
        public string ReviewerName { get; set; }
        public string ReviewTitle { get; set; }
        public double ReviewGrade { get; set; }
        public string ReviewDescription { get; set; }
    }
}