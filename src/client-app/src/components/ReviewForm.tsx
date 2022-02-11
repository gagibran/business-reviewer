import ReviewFormStar from "./ReviewFormStar";
import AppFormOverlay from "./AppFormOverlay";
import { ChangeEvent, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TIMEOUT } from "../common/constants/form";
import { animateOverlayFadeout } from "../common/functions/functions";
import { reviewsRequests } from "../api/requests";
import "../styles/AppForm.scss";

interface Props {
    reviewerId: string,
    businessId: string
}

const ReviewForm = function ({ reviewerId, businessId }: Props) {
    const reviewFormOverlayRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [reviewTitle, setReviewTitle] = useState('');
    const [reviewGrade, setReviewGrade] = useState('');
    const [reviewDescription, setReviewDescription] = useState('');

    const reviewTitleHandler = function (e: ChangeEvent<HTMLInputElement>) {
        setReviewTitle(e.target.value);
    };

    const reviewGradeHandler = function (e: ChangeEvent<HTMLInputElement>) {
        setReviewGrade(e.target.value);
    };

    const reviewDescriptionHandler = function (e: ChangeEvent<HTMLTextAreaElement>) {
        setReviewDescription(e.target.value);
    };

    const formSubmitHandler = async function (e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await reviewsRequests.post(
                '',
                {
                    businessId,
                    reviewerId,
                    reviewTitle,
                    reviewGrade,
                    reviewDescription,
                }
            );
        } catch (error) {
            console.log(error);
        } finally {
            setReviewTitle('');
            setReviewGrade('');
            setReviewDescription('');
        }
    };

    const createReviewStars = function (maxGrade: number) {
        let reviewStars = [];
        for (let index = maxGrade; index > 0; index--) {
            reviewStars.push(<ReviewFormStar grade={index.toString()} key={index} onGradeChange={reviewGradeHandler} />);
        }
        return reviewStars;
    };

    const formCloseHandler = function () {
        animateOverlayFadeout(
            'app-form-overlay--fadeout',
            'app-form-overlay--hidden',
            reviewFormOverlayRef.current,
            TIMEOUT
        );
    };

    return (
        <AppFormOverlay id="reviewFormOverlay" overlayRef={reviewFormOverlayRef}>
            <form
                id="reviewForm"
                className="app-form"
                onSubmit={formSubmitHandler}
            >
                <AiOutlineClose
                    className="app-form__close-icon"
                    onClick={formCloseHandler}
                />
                <input value={reviewerId} hidden readOnly />
                <input value={businessId} hidden readOnly />
                <label htmlFor="businessName">
                    Business Name
                    <span className="app-form__required">*</span>
                </label>
                <input
                    type="text"
                    name="businessName"
                    id="businessName"
                    readOnly
                    value="PLACEHOLDER: CHANGE BY THE BUSINESS NAME"
                />
                <label htmlFor="reviewTitle">
                    Title
                    <span className="app-form__required">*</span>
                </label>
                <input
                    type="text"
                    name="reviewTitle"
                    id="reviewTitle"
                    onChange={reviewTitleHandler}
                    required
                />
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
                <textarea
                    name="reviewDescription"
                    id="reviewDescription"
                    onChange={reviewDescriptionHandler}
                />
                <button type="submit">Submit</button>
            </form>
        </AppFormOverlay>
    );
};

export default ReviewForm;
