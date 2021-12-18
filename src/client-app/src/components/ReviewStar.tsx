import "../styles/ReviewStar.scss";
import { StarReviewButton } from "../interfaces/starReviewButton";

const ReviewStar = function ({ setGrade, grade }: StarReviewButton) {
    return (
        <a href="/"
            className="review-star"
            onClick={(e) => {
                e.preventDefault();
                setGrade(grade);
            }}
        >
            <svg
                width="36"
                height="33"
                viewBox="0 0 36 33"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M18 0L22.0413 12.4377H35.119L24.5389 20.1246L28.5801 32.5623L18 24.8754L7.41987 32.5623L11.4611 20.1246L0.880983 12.4377H13.9587L18 0Z"
                    fill="#C4C4C4"
                />
            </svg>
        </a>
    );
};

export default ReviewStar;