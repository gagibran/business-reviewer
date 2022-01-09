import { FormEvent, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { animateOverlayFadeout } from "../common/functions/functions";
import { BUSINESS_TYPES, TIMEOUT } from "../common/constants/form";
import { businessesRequests } from "../api/requests";
import "../styles/AppForm.scss";
import WorldMap from "./WorldMap";
import BusinessFormRefs from "../common/types/businessFormRefs";

interface Props {
    userId: string,
}

const BusinessForm = function ({ userId }: Props) {
    const [inputs, setInputs] = useState({
        userId: '',
        businessName: '',
        businessAddress: '',
        businessType: '',
        businessLatitude: 0,
        businessLongitude: 0
    });

    const refs: BusinessFormRefs = {
        overlayRef: useRef() as React.MutableRefObject<HTMLInputElement>,
        businessLongitudeRef: useRef() as React.MutableRefObject<HTMLInputElement>,
        businessLatitudeRef: useRef() as React.MutableRefObject<HTMLInputElement>,
        businessNameRef: useRef() as React.MutableRefObject<HTMLInputElement>,
        businessAddressRef: useRef() as React.MutableRefObject<HTMLInputElement>,
        businessTypeRef: useRef() as React.MutableRefObject<HTMLSelectElement>
    }

    const handleSubmitButton = function () {
        setInputs({
            userId: userId,
            businessLongitude: +refs.businessLongitudeRef.current.value,
            businessLatitude: +refs.businessLatitudeRef.current.value,
            businessAddress: refs.businessAddressRef.current.value,
            businessName: refs.businessNameRef.current.value,
            businessType: refs.businessTypeRef.current.value
        });
        if (refs.businessNameRef.current.value !== ''
            && refs.businessTypeRef.current.value !== '') {
            animateOverlayFadeout(
                'app-form-overlay--fadeout',
                'app-form-overlay--hidden',
                refs.overlayRef.current,
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
        <>
            <WorldMap refs={refs} />
            <div
                id="businessFormOverlay"
                className="app-form-overlay app-form-overlay--fadeout app-form-overlay--hidden"
                ref={refs.overlayRef}
                onClick={(e) => {
                    if (e.target === refs.overlayRef.current) {
                        animateOverlayFadeout(
                            'app-form-overlay--fadeout',
                            'app-form-overlay--hidden',
                            refs.overlayRef.current,
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
                                refs.overlayRef.current,
                                TIMEOUT
                            );
                        }}
                    />
                    <input
                        type="number"
                        name="businessLongitude"
                        id="businessLongitude"
                        step="any"
                        ref={refs.businessLongitudeRef}
                        hidden
                    />
                    <input
                        type="number"
                        name="businessLatitude"
                        id="businessLatitude"
                        step="any"
                        ref={refs.businessLatitudeRef}
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
                        ref={refs.businessAddressRef}
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
                        ref={refs.businessNameRef}
                        required
                    />
                    <label htmlFor="businessType">
                        Business Type
                        <span className="app-form__required">*</span>
                    </label>
                    <select
                        name="businessType"
                        id="businessType"
                        ref={refs.businessTypeRef}
                        required
                    >
                        {BUSINESS_TYPES.map((name, index) => <option key={index} value={name}>{name}</option>)}
                    </select>
                    <button type="submit" onClick={handleSubmitButton}>Submit</button>
                </form>
            </div>
        </>
    );
};

export default BusinessForm;
