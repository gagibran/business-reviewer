using BusinessReviewer.Application.Businesses.Commands;

namespace BusinessReviewer.WebUI.Controllers;

public class BusinessesController : BaseAPIController
{
    private readonly IMediator _mediator;

    public BusinessesController(IMediator mediator)
    {
        _mediator = mediator;
    }

    // GET all businesses.
    [HttpGet]
    public async Task<IActionResult> GetBusinessesAsync()
    {
        // Queries the DB through MediatR.
        List<Business> businesses = await _mediator.Send(new GetBusinessesQuery());
        return Ok(businesses);
    }

    // GET single business based on its ID.
    [HttpGet("{id}")]

    // The ActionName attribute is here because in CreateBusinessAsync(), when we return
    // CreatedAtAction(nameof(GetBusinessAsync), new { id = businessCreated.Id }, businessCreated),
    // .NET doesn't like the fact that the method ends with "Async", so it trims it.
    // ActionName guarantees that "Async" doesn't get trimmed and it works in CreatedAtAction.
    // More info: https://www.josephguadagno.net/2020/07/01/no-route-matches-the-supplied-values.
    [ActionName(nameof(GetBusinessAsync))]
    public async Task<IActionResult> GetBusinessAsync(Guid id)
    {
        Business business = await _mediator.Send(new GetBusinessQuery { Id = id });

        if (business is null) return NotFound();

        return Ok(business);
    }

    // POST a single business.
    // We don't have to use the [FromBody] attribute before Business business here because
    // we already put [ApiController] decorating BaseAPIController. This means that
    // HttpPost is smart enough to know that the business argument will be passed as
    // JSON and that it has to look inside the body for its properties.
    [HttpPost]
    public async Task<IActionResult> CreateBusinessAsync(Business business)
    {
        Business businessCreated = await _mediator.Send(new CreateBusinessCommand { Business = business });

        // This method allows us to return the item and its GET URI (with a 201 status).
        return CreatedAtAction(nameof(GetBusinessAsync), new { id = businessCreated.Id }, businessCreated);
    }

    // PUT a single business.
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateBusinessAsync(Guid id, Business business)
    {
        try
        {
            await _mediator.Send(new UpdateBusinessCommand { Id = id, Business = business });
            return NoContent();
        }
        catch (NotFoundException)
        {
            return NotFound();
        }
    }

    // DELETE a single business.
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBusinessAsync(Guid id)
    {
        try
        {
            await _mediator.Send(new DeleteBusinessCommand { Id = id });
            return NoContent();
        }
        catch (NotFoundException)
        {
            return NotFound();
        }
    }
}
