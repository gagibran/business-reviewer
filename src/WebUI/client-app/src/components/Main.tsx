import axios from "axios";
import { useEffect, useState } from "react";
import { Review } from "../interfaces/review";
import "../styles/Main.scss";

const Main = function () {

    // This is responsible for updating the reviews array on the page:
    // We're typing "reviews" to an array of the "Review" interface.
    const [reviews, setReviews] = useState<Review[]>([]);

    // This is responsible for fetching the API and updating reviews (using setReviews) with its response:
    useEffect(() => {

        // Axios is responsible for actually fetching the API:
        // The get() method also returns an array of "Reviews".
        axios.get<Review[]>('https://localhost:5001/api/reviews').then(res => {
            setReviews(res.data);
        });
    }, []);

    return (
        <main className="main-content">
            <section id="reviews" className="main-content__reviews">
                {reviews.map((review) => (
                    <a href="https://google.com" key={review.id}>
                        {review.businessName}
                    </a>
                ))}
            </section>
        </main>
    );
};

export default Main;