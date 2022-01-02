using BusinessReviewer.Application.Reviews.Commands;

namespace BusinessReviewer.WebUI.Controllers;

public class ReviewsController : BaseAPIController
{
    private readonly IMediator _mediator;

    public ReviewsController(IMediator mediator)
    {
        _mediator = mediator;
    }

    // GET all reviews.
    [HttpGet]
    public async Task<IActionResult> GetReviewsAsync()
    {
        // Queries the DB through MediatR.
        var reviews = await _mediator.Send(new GetReviewsQuery());
        return Ok(reviews);
    }

    // GET single review based on its ID.
    // The ActionName attribute is here because in CreateReviewAsync(), when we return
    // CreatedAtAction(nameof(GetReviewAsync), new { id = reviewCreated.Id }, reviewCreated),
    // .NET doesn't like the fact that the method ends with "Async", so it trims it.
    // ActionName guarantees that "Async" doesn't get trimmed and it works in CreatedAtAction.
    // More info: https://www.josephguadagno.net/2020/07/01/no-route-matches-the-supplied-values.
    [HttpGet("{id}")]
    [ActionName(nameof(GetReviewAsync))]
    public async Task<IActionResult> GetReviewAsync(Guid id)
    {
        var review = await _mediator.Send(new GetReviewQuery { Id = id });

        if (review is null) return NotFound();

        return Ok(review);
    }

    // POST a single review.
    // We don't have to use the [FromBody] attribute before Review review here because
    // we already put [ApiController] decorating BaseAPIController. This means that
    // HttpPost is smart enough to know that the review argument will be passed as
    // JSON and that it has to look inside the body for its properties.
    [HttpPost]
    public async Task<IActionResult> CreateReviewAsync(Review review)
    {
        var reviewCreated = await _mediator.Send(new CreateReviewCommand { Review = review });

        // This method allows us to return the item and its GET URI (with a 201 status).
        return CreatedAtAction(nameof(GetReviewAsync), new { id = reviewCreated.Id }, reviewCreated);
    }

    // PUT a single review.
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateReviewAsync(Guid id, Review review)
    {
        try
        {
            await _mediator.Send(new UpdateReviewCommand { Id = id, Review = review });
            return NoContent();
        }
        catch (NotFoundException)
        {
            return NotFound();
        }
    }

    // DELETE a single review.
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteReviewAsync(Guid id)
    {
        try
        {
            await _mediator.Send(new DeleteReviewCommand { Id = id });
            return NoContent();
        }
        catch (NotFoundException)
        {
            return NotFound();
        }
    }
}
