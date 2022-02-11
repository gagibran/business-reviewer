import { useEffect, useState } from "react";
import { reviewsRequests } from "../api/requests";
import Review from "../common/entities/review";
import "../styles/Reviews.scss";

const Reviews = function () {
    const [reviews, setReviews] = useState<Review[]>([]);

    // This hook is responsible for updating the reviews whenever there's a change.
    useEffect(() => {
        const loadReviewsFromDb = async function () {
            try {
                const reviewsFromDb = await reviewsRequests.get<Review[]>('/');
                setReviews(reviewsFromDb.data);
            } catch (error) {
                console.log(error);
            }
        };
        loadReviewsFromDb();
    }, [reviews]);

    return (
        <main id="reviews">
            {reviews.map(review => {
                return (
                    <a href="/" key={review.id}>
                        {review.reviewTitle}
                    </a>
                );
            })}
        </main>
    );
};

export default Reviews;
