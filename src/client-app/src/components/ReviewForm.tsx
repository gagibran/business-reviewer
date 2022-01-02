import { useRef } from "react";
import { FormReview } from "../common/interfaces/formReview";
import { AiOutlineClose } from "react-icons/ai";
import { TIMEOUT } from "../common/constants/formConstants";
import ReviewStar from "./ReviewStar";
import "../styles/AppForm.scss";
import { animateOverlayFadeout } from "../common/functions/functions";

const ReviewForm = function ({ reviewerId, businessId }: FormReview) {
    const overlayRef = useRef() as React.MutableRefObject<HTMLInputElement>;

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
            className="app-form-overlay app-form-overlay--fadeout app-form-overlay--hidden"
            ref={overlayRef}
            onClick={(e) => {
                if (e.target === overlayRef.current) {
                    animateOverlayFadeout(
                        'app-form-overlay--fadeout',
                        'app-form-overlay--hidden',
                        overlayRef.current,
                        TIMEOUT
                    );
                }
            }}
        >
            <form id="reviewForm" className="app-form">
                <AiOutlineClose
                    className="app-form__close-icon"
                    onClick={() => {
                        animateOverlayFadeout(
                            'app-form-overlay--fadeout',
                            'app-form-overlay--hidden',
                            overlayRef.current,
                            TIMEOUT
                        );
                    }}
                />
                <input type="text" name="reviewerId" id="reviewerId" defaultValue={reviewerId} hidden />
                <input type="text" name="businessId" id="businessId" defaultValue={businessId} hidden />
                <label htmlFor="businessName">
                    Business Name
                    <span className="app-form__required">*</span>
                </label>
                <input type="text" name="businessName" id="businessName" readOnly />
                <label htmlFor="reviewTitle">
                    Title
                    <span className="app-form__required">*</span>
                </label>
                <input type="text" name="reviewTitle" id="reviewTitle" required />
                <label htmlFor="reviewGrade">
                    Grade
                    <span className="app-form__required">*</span>
                </label>
                <div className="app-form__star-container">
                    {createReviewStars(5)}
                </div>
                <label htmlFor="reviewDescription">
                    Description
                </label>
                <textarea name="reviewDescription" id="reviewDescription" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ReviewForm;