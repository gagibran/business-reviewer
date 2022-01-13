import { FormEvent, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { animateOverlayFadeout } from "../common/functions/functions";
import { BUSINESS_TYPES, TIMEOUT } from "../common/constants/form";
import { businessesRequests } from "../api/requests";
import "../styles/AppForm.scss";
import BusinessFormRefs from "../common/interfaces/businessFormRefs";

interface Props {
    userId: string,
    businessFormRefs: BusinessFormRefs
}

const BusinessForm = function ({ userId, businessFormRefs }: Props) {
    const [inputs, setInputs] = useState({
        userId: '',
        businessName: '',
        businessAddress: '',
        businessType: '',
        businessLatitude: 0,
        businessLongitude: 0
    });

    const handleSubmitButton = function () {
        setInputs({
            userId: userId,
            businessLongitude: +businessFormRefs.businessLongitudeRef.current.value,
            businessLatitude: +businessFormRefs.businessLatitudeRef.current.value,
            businessAddress: businessFormRefs.businessAddressRef.current.value,
            businessName: businessFormRefs.businessNameRef.current.value,
            businessType: businessFormRefs.businessTypeRef.current.value
        });
        if (businessFormRefs.businessNameRef.current.value !== ''
            && businessFormRefs.businessTypeRef.current.value !== '') {
            animateOverlayFadeout(
                'app-form-overlay--fadeout',
                'app-form-overlay--hidden',
                businessFormRefs.overlayRef.current,
                TIMEOUT
            );
        }
    };

    const handleSubmit = async function (e: FormEvent) {
        e.preventDefault();
        try {
            await businessesRequests.post('', inputs);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div
            id="businessFormOverlay"
            className="app-form-overlay app-form-overlay--fadeout app-form-overlay--hidden"
            ref={businessFormRefs.overlayRef}
            onClick={(e) => {
                if (e.target === businessFormRefs.overlayRef.current) {
                    animateOverlayFadeout(
                        'app-form-overlay--fadeout',
                        'app-form-overlay--hidden',
                        businessFormRefs.overlayRef.current,
                        TIMEOUT
                    );
                }
            }}
        >
            <form id="reviewForm" className="app-form" onSubmit={handleSubmit}>
                <AiOutlineClose
                    className="app-form__close-icon"
                    onClick={() => {
                        animateOverlayFadeout(
                            'app-form-overlay--fadeout',
                            'app-form-overlay--hidden',
                            businessFormRefs.overlayRef.current,
                            TIMEOUT
                        );
                    }}
                />
                <input
                    type="number"
                    name="businessLongitude"
                    id="businessLongitude"
                    step="any"
                    ref={businessFormRefs.businessLongitudeRef}
                    hidden
                />
                <input
                    type="number"
                    name="businessLatitude"
                    id="businessLatitude"
                    step="any"
                    ref={businessFormRefs.businessLatitudeRef}
                    hidden
                />
                <label htmlFor="businessAddress">
                    Business Address
                    <span className="app-form__required">*</span>
                </label>
                <input
                    type="text"
                    name="businessAddress"
                    id="businessAddress"
                    ref={businessFormRefs.businessAddressRef}
                    readOnly
                />
                <label htmlFor="businessName">
                    Business Name
                    <span className="app-form__required">*</span>
                </label>
                <input
                    type="text"
                    name="businessName"
                    id="businessName"
                    ref={businessFormRefs.businessNameRef}
                    required
                />
                <label htmlFor="businessType">
                    Business Type
                    <span className="app-form__required">*</span>
                </label>
                <select
                    name="businessType"
                    id="businessType"
                    ref={businessFormRefs.businessTypeRef}
                    required
                >
                    {BUSINESS_TYPES.map((name, index) => <option key={index} value={name}>{name}</option>)}
                </select>
                <button type="submit" onClick={handleSubmitButton}>Submit</button>
            </form>
        </div>
    );
};

export default BusinessForm;
