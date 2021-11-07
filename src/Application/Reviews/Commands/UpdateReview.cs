using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using BusinessReviewer.Application.Common.Exceptions;
using BusinessReviewer.Application.Common.Interfaces;
using BusinessReviewer.Domain.Entities;
using MediatR;

namespace BusinessReviewer.Application.Reviews.Commands
{
    // Since we won't be returning the object that is being updated (we only need an HTTP 204), we don't
    // pass "Review" as a generic type to IRequest and, consequentially, to IRequestHandler:
    public class UpdateReviewCommand : IRequest
    {
        public Guid Id { get; set; }
        public Review Review { get; set; }
    }

    public class UpdateReviewCommandHandler : IRequestHandler<UpdateReviewCommand>
    {
        private readonly IApplicationDBContext _applicationDBContext;
        private readonly IMapper _mapper;

        public UpdateReviewCommandHandler(IApplicationDBContext applicationDBContext, IMapper mapper)
        {
            _applicationDBContext = applicationDBContext;
            _mapper = mapper;
        }

        // Since we don't return a "Review" object, this method will return a MediatR.Unit object, which
        // is essentially just an empty object stating that the operation was successfull:
        public async Task<Unit> Handle(UpdateReviewCommand request, CancellationToken cancellationToken)
        {
            var reviewUpdated = await _applicationDBContext.Reviews.FindAsync(request.Id);

            if (reviewUpdated is null) throw new NotFoundException();

            // Using AutoMapper to create a similar result as:
            // reviewUpdated.ReviewTitle = request.Review.ReviewTitle;
            // reviewUpdated.ReviewGrade = request.Review.ReviewGrade;
            // reviewUpdated.ReviewDescription = request.Review.ReviewDescription;
            _mapper.Map(request.Review, reviewUpdated);

            await _applicationDBContext.SaveChangesAsync();

            return Unit.Value;
        }
    }
}