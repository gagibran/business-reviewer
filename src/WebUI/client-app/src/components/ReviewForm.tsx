import "../styles/ReviewForm.scss";

const ReviewForm = function () {
    return (
        // TODO: Put hidden back in the classes.
        // TODO: Put the rest of the hidden inputs (latitude and longitude etc).
        <form id="reviewForm" className="map__review-form">
            <input type="text" name="businessAddress" id="businessAddress" hidden />
            <label htmlFor="businessName">Business Name</label>
            <input type="text" name="businessName" id="businessName" />
        </form>
    );
};

export default ReviewForm;