import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../stores/store";
import "../styles/Reviews.scss";

const Reviews = function () {
    // This store is responsible for updating the reviews array on the page
    // by fetching the API and loading the reviews with its response.
    const { reviewStore } = useStore();

    // This hook is responsible for updating the reviews whenever there's a change.
    useEffect(() => {
        reviewStore.loadReviewsFromDb();
    }, [reviewStore]);

    return (
        <main id="reviews">
            {reviewStore.reviews.map((review) => (
                <a href="/" key={review.id}>
                    {review.businessName}
                </a>
            ))}
        </main>
    );
};

export default observer(Reviews);