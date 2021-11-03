import axios from "axios";
import { useEffect, useState } from "react";

const Main = function () {

    // This is responsible for updating the reviews array on the page:
    const [reviews, setReviews] = useState([]);

    // This is responsible for fetching the API and updating reviews (using setReviews) with its response:
    useEffect(() => {

        // Axios is responsible for actually fetching the API:
        axios.get('https://localhost:5001/api/reviews').then(res => {
            console.log(res);
            setReviews(res.data);
        });
    }, []);

    return (
        <main>
            <ul>
                {reviews.map((review: any) => (
                    <li key={review.id}>
                        {review.businessName}
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Main;