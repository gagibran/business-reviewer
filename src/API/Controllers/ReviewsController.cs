using System;
using System.Threading.Tasks;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ReviewsController : BaseAPIController
    {
        private readonly ApplicationDBContext _applicationDBContext;
        public ReviewsController(ApplicationDBContext applicationDBContext)
        {
            _applicationDBContext = applicationDBContext;
        }

        // GET all reviews:
        [HttpGet]
        public async Task<IActionResult> GetReviewsAsync()
        {
            var reviews = await _applicationDBContext.Reviews.ToListAsync();
            return Ok(reviews);
        }

        // GET single review based on its ID:
        [HttpGet("{id}")]
        public async Task<IActionResult> GetReviewAsync(Guid id)
        {
            var review = await _applicationDBContext.Reviews.FindAsync(id);
            if (review == null)
            {
                return NotFound();
            }
            return Ok(review);
        }
    }
}