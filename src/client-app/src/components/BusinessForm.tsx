import BusinessFormRefs from "../common/interfaces/businessFormRefs";
import { FormEvent } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { animateOverlayFadeout } from "../common/functions/functions";
import { BUSINESS_TYPES, TIMEOUT } from "../common/constants/form";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/store";
import "../styles/AppForm.scss";

interface Props {
    userId: string,
    businessFormRefs: BusinessFormRefs
}

const BusinessForm = function ({ userId, businessFormRefs }: Props) {
    const { businessStore } = useStore();

    const handleSubmitButton = function () {
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
        await businessStore.postBusiness(
            userId,
            businessFormRefs.businessNameRef.current.value,
            businessFormRefs.businessAddressRef.current.value,
            businessFormRefs.businessTypeRef.current.value,
            +businessFormRefs.businessLatitudeRef.current.value,
            +businessFormRefs.businessLongitudeRef.current.value
        );
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
            <form id="businessForm" className="app-form" onSubmit={handleSubmit}>
                <AiOutlineClose
                    className="app-form__close-icon"
                    onClick={
                        animateOverlayFadeout.bind(
                            null,
                            'app-form-overlay--fadeout',
                            'app-form-overlay--hidden',
                            businessFormRefs.overlayRef.current,
                            TIMEOUT
                        )}
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

// observer() is a high-order function from MobX that allows the component to
// become an observer.
export default observer(BusinessForm);
