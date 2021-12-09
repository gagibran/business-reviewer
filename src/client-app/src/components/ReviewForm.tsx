import { FormReview } from "../interfaces/formReview";
import "../styles/ReviewForm.scss";
import { AiOutlineClose } from "react-icons/ai";

const TIMEOUT = 250;

const ReviewForm = function ({ reviewerName, reviewerUsername }: FormReview) {
    const animateOverlayFadeout = function (overlay: any, timeout: number) {
        overlay.classList.add('fadeout');
        setTimeout(() => {
            overlay?.classList.add('hidden');
        }, timeout);
    }
    return (
        <div
            id="reviewFormOverlay"
            className="fadeout hidden"
            onClick={(e) => {
                animateOverlayFadeout(e.target, TIMEOUT);
            }}
        >
            <form id="reviewForm" className="review-form">
                <AiOutlineClose
                    className="review-form__close-icon"
                    onClick={() => {
                        // @ts-ignore
                        const overlay = document.getElementById('reviewFormOverlay');
                        animateOverlayFadeout(overlay, TIMEOUT);
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
                <label htmlFor="businessName">
                    Business Name
                    <span className="review-form__required">*</span>
                </label>
                <input type="text" name="businessName" id="businessName" required />
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
                {/* Change this into pictures. */}
                <input type="number" name="ReviewGrade" id="ReviewGrade" max="5" min="0" required />
                <label htmlFor="ReviewDescription">Description</label>
                <textarea name="ReviewDescription" id="ReviewDescription" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ReviewForm;