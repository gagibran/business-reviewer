import AppFormOverlay from "./AppFormOverlay";
import { AiOutlineClose } from "react-icons/ai";
import { animateOverlayFadeout } from "../common/functions/functions";
import { BUSINESS_TYPES, TIMEOUT } from "../common/constants/form";
import { ChangeEvent, MutableRefObject, useState } from "react";
import { businessesRequests } from "../api/requests";
import "../styles/AppForm.scss";

interface Props {
    userId: string,
    businessAddressRef: MutableRefObject<HTMLInputElement>,
    businessLatitudeRef: MutableRefObject<HTMLInputElement>,
    businessLongitudeRef: MutableRefObject<HTMLInputElement>,
    businessFormOverlayRef: MutableRefObject<HTMLDivElement>,
}

const BusinessForm = function (
    {
        userId,
        businessAddressRef,
        businessLatitudeRef,
        businessLongitudeRef,
        businessFormOverlayRef
    }: Props
) {
    const [businessName, setBusinessName] = useState('');
    const [businessType, setBusinessType] = useState('');

    const businessNameHandler = function (e: ChangeEvent<HTMLInputElement>) {
        setBusinessName(e.target.value);
    };

    const businessTypeHandler = function (e: ChangeEvent<HTMLSelectElement>) {
        setBusinessType(e.target.value);
    };

    const formSubmitHandler = async function (e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await businessesRequests.post(
                '',
                {
                    userId,
                    businessName,
                    businessAddress: businessAddressRef.current.value,
                    businessType,
                    businessLatitude: +businessLatitudeRef.current.value,
                    businessLongitude: +businessLongitudeRef.current.value,
                }
            );
        } catch (error) {
            console.log(error);
        } finally {
            setBusinessName('');
            setBusinessType('');
        }
    };

    const submitButtonHandler = function () {
        if (businessName !== '' && businessType !== '') {
            animateOverlayFadeout(
                'app-form-overlay--fadeout',
                'app-form-overlay--hidden',
                businessFormOverlayRef.current,
                TIMEOUT
            );
        }
    };

    const formCloseHandler = function () {
        animateOverlayFadeout(
            'app-form-overlay--fadeout',
            'app-form-overlay--hidden',
            businessFormOverlayRef.current,
            TIMEOUT
        );
    };

    return (
        <AppFormOverlay id="businessFormOverlay" overlayRef={businessFormOverlayRef}>
            <form
                id="businessForm"
                className="app-form"
                onSubmit={formSubmitHandler}
            >
                <AiOutlineClose
                    className="app-form__close-icon"
                    onClick={formCloseHandler}
                />
                <label htmlFor="businessAddress">
                    Business Address
                    <span className="app-form__required">*</span>
                </label>
                <input ref={businessLatitudeRef} hidden />
                <input ref={businessLongitudeRef} hidden />
                <input
                    type="text"
                    name="businessAddress"
                    id="businessAddress"
                    ref={businessAddressRef}
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
                    value={businessName}
                    onChange={businessNameHandler}
                    required
                />
                <label htmlFor="businessType">
                    Business Type
                    <span className="app-form__required">*</span>
                </label>
                <select
                    name="businessType"
                    id="businessType"
                    value={businessType}
                    onChange={businessTypeHandler}
                    required
                >
                    <option value=""></option>
                    {BUSINESS_TYPES.map((name, index) => {
                        return <option key={index} value={name}>{name}</option>
                    })}
                </select>
                <button type="submit" onClick={submitButtonHandler}>
                    Submit
                </button>
            </form>
        </AppFormOverlay>
    );
};

export default BusinessForm;
