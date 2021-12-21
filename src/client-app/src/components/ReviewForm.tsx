import { useRef } from "react";
import { FormReview } from "../interfaces/formReview";
import { AiOutlineClose } from "react-icons/ai";
import { BUSINESS_TYPES, TIMEOUT } from "../constants/reviewFormConstants";
import ReviewStar from "./ReviewStar";
import "../styles/ReviewForm.scss";

const ReviewForm = function ({ reviewerName, reviewerUsername }: FormReview) {
    const overlayRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const animateOverlayFadeout = function (overlay: any, timeout: number) {
        overlay.classList.add('review-form-overlay--fadeout');
        setTimeout(() => {
            overlay?.classList.add('review-form-overlay--hidden');
        }, timeout);
    };

    const createReviewStars = function (maxGrade: number) {
        let reviewStars = [];
        for (let index = maxGrade; index > 0; index--) {
            reviewStars.push(<ReviewStar grade={index.toString()} key={index} />);
        }
        return reviewStars;
    };

    return (
        <div
            id="reviewFormOverlay"
            className="review-form-overlay review-form-overlay--fadeout review-form-overlay--hidden"
            ref={overlayRef}
            onClick={(e) => {
                if (e.target === overlayRef.current) {
                    animateOverlayFadeout(overlayRef.current, TIMEOUT);
                }
            }}
        >
            <form id="reviewForm" className="review-form">
                <AiOutlineClose
                    className="review-form__close-icon"
                    onClick={() => {
                        animateOverlayFadeout(overlayRef.current, TIMEOUT);
                    }}
                />
                <input type="text" name="reviewerName" id="reviewerName" defaultValue={reviewerName} hidden />
                <input type="text" name="reviewerUsername" id="reviewerUsername" defaultValue={reviewerUsername} hidden />
                <label htmlFor="businessAddress">
                    Business Address
                    <span className="review-form__required">*</span>
                </label>
                <input type="text" name="businessAddress" id="businessAddress" readOnly />
                <input type="number" name="businessLatitude" id="businessLatitude" step="any" hidden />
                <input type="number" name="businessLongitude" id="businessLongitude" step="any" hidden />
                <label htmlFor="businessType">
                    Business Type
                    <span className="review-form__required">*</span>
                </label>
                <select name="businessType" id="businessType" required>
                    {BUSINESS_TYPES.map((name, index) => <option key={index} value={name}>{name}</option>)}
                </select>
                <label htmlFor="ReviewTitle">
                    Title
                    <span className="review-form__required">*</span>
                </label>
                <input type="text" name="ReviewTitle" id="ReviewTitle" required />
                <label htmlFor="ReviewGrade">
                    Grade
                    <span className="review-form__required">*</span>
                </label>
                <div className="review-form__star-container">
                    {createReviewStars(5)}
                </div>
                <label htmlFor="ReviewDescription">Description</label>
                <textarea name="ReviewDescription" id="ReviewDescription" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ReviewForm;