import { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/AppForm.scss";
import { FormBusiness } from "../common/interfaces/formBusiness";
import { animateOverlayFadeout } from "../common/functions/functions";
import { BUSINESS_TYPES, TIMEOUT } from "../common/constants/formConstants";

const BusinessForm = function ({ userId }: FormBusiness) {
    const overlayRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    return (
        <div
            id="businessFormOverlay"
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
                <input type="number" name="businessLongitude" id="businessLongitude" step="any" hidden />
                <input type="number" name="businessLatitude" id="businessLatitude" step="any" hidden />
                <input type="text" name="userId" id="userId" defaultValue={userId} hidden />
                <label htmlFor="businessAddress">
                    Business Address
                    <span className="app-form__required">*</span>
                </label>
                <input type="text" name="businessAddress" id="businessAddress" readOnly />
                <label htmlFor="businessType">
                    Business Type
                    <span className="app-form__required">*</span>
                </label>
                <select name="businessType" id="businessType" required>
                    {BUSINESS_TYPES.map((name, index) => <option key={index} value={name}>{name}</option>)}
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BusinessForm;