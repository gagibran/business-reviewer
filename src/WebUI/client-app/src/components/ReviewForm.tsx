import { FormReview } from "../interfaces/formReview";
import "../styles/ReviewForm.scss";

const ReviewForm = function ({ reviewerName, reviewerUsername }: FormReview) {
    return (
        <form id="reviewForm" className="map__review-form hidden">
            {/* TODO: Add an overlay. */}
            <input type="text" name="reviewerName" id="reviewerName" defaultValue={reviewerName} hidden />
            <input type="text" name="reviewerUsername" id="reviewerUsername" defaultValue={reviewerUsername} hidden />
            <label htmlFor="businessAddress">Business Address</label>
            <input type="text" name="businessAddress" id="businessAddress" readOnly />
            <input type="number" name="businessLatitude" id="businessLatitude" hidden />
            <input type="number" name="businessLongitude" id="businessLongitude" hidden />
            <label htmlFor="businessName">Business Name</label>
            <input type="text" name="businessType" id="businessType" />
            <label htmlFor="businessType">Business Type</label>
            <p>PUT A LIST OF OPTIONS!</p>
            <label htmlFor="ReviewTitle">Title</label>
            <input type="text" name="ReviewTitle" id="ReviewTitle" />
            <label htmlFor="ReviewGrade">Grade</label>
            {/* Change this into pictures. */}
            <input type="number" name="ReviewGrade" id="ReviewGrade" />
            <label htmlFor="ReviewDescription">Description</label>
            <textarea name="ReviewDescription" id="ReviewDescription" />
        </form>
    );
};

export default ReviewForm;