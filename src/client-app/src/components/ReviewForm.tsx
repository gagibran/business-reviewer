import { useRef } from "react";
import { FormReview } from "../interfaces/formReview";
import "../styles/ReviewForm.scss";
import { AiOutlineClose } from "react-icons/ai";
import ReviewStar from "./ReviewStar";

const TIMEOUT = 250;

const ReviewForm = function ({ reviewerName, reviewerUsername }: FormReview) {
    const overlayRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const gradeInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const animateOverlayFadeout = function (overlay: any, timeout: number) {
        overlay.classList.add('review-form-overlay--fadeout');
        setTimeout(() => {
            overlay?.classList.add('review-form-overlay--hidden');
        }, timeout);
    };

    const setInputGrade = function (grade: string) {
        gradeInputRef.current.value = grade
    }

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
                        // @ts-ignore
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
                <input type="number" name="businessLatitude" id="businessLatitude" hidden />
                <input type="number" name="businessLongitude" id="businessLongitude" hidden />
                <label htmlFor="businessType">
                    Business Type
                    <span className="review-form__required">*</span>
                </label>
                <select name="businessType" id="businessType" required>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Grocery Store">Grocery Store</option>
                    <option value="Pub">Pub</option>
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
                <input type="number" name="ReviewGrade" id="ReviewGrade" max="5" min="0" required hidden />
                <div className="review-form__star-container">
                    <ReviewStar setGrade={setInputGrade} grade="5" />
                    <ReviewStar setGrade={setInputGrade} grade="4" />
                    <ReviewStar setGrade={setInputGrade} grade="3" />
                    <ReviewStar setGrade={setInputGrade} grade="2" />
                    <ReviewStar setGrade={setInputGrade} grade="1" />
                </div>
                <input ref={gradeInputRef} type="number" hidden />
                <label htmlFor="ReviewDescription">Description</label>
                <textarea name="ReviewDescription" id="ReviewDescription" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ReviewForm;