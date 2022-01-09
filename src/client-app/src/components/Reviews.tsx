import { useEffect, useState } from "react";
import { reviewsRequests } from "../api/requests";
import Review from "../common/entities/review";
import "../styles/Reviews.scss";

const Reviews = function () {

    // This is responsible for updating the reviews array on the page.
    // We're typing "reviews" to an array of the "Review" interface.
    const [reviews, setReviews] = useState<Review[]>([]);

    // This is responsible for fetching the API and updating reviews (using setReviews) with its response.
    useEffect(() => {

        // The get() method also returns an array of "Reviews".
        reviewsRequests.get('/').then(res => setReviews(res.data));
    }, []);

    return (
        <main id="reviews">
            {reviews.map((review) => (
                <a href="/" key={review.id}>
                    {review.businessName}
                </a>
            ))}
        </main>
    );
};

export default Reviews;