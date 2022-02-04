import BusinessForm from "./BusinessForm";
import ReviewForm from "./ReviewForm";
import SideNav from "./SideNav";
import WorldMap from "./WorldMap";
import { MutableRefObject, useRef } from "react";
import { v4 } from "uuid";
import "../styles/App.scss";

const App = function () {
    const businessFormOverlayRef = useRef() as MutableRefObject<HTMLDivElement>;
    const businessAddressRef = useRef() as MutableRefObject<HTMLInputElement>;
    const businessLatitudeRef = useRef() as MutableRefObject<HTMLInputElement>;
    const businessLongitudeRef = useRef() as MutableRefObject<HTMLInputElement>;

    return (
        <main>
            <SideNav
                userName="Joanna Johnson"
                userEmail="joanna.johnson@example.com"
                profilePictureSrc="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            />
            <BusinessForm
                userId={v4()}
                businessAddressRef={businessAddressRef}
                businessLatitudeRef={businessLatitudeRef}
                businessLongitudeRef={businessLongitudeRef}
                businessFormOverlayRef={businessFormOverlayRef}
            />
            <ReviewForm
                reviewerId={v4()}
                businessId={v4()}
            />
            <WorldMap
                businessAddressRef={businessAddressRef}
                businessLatitudeRef={businessLatitudeRef}
                businessLongitudeRef={businessLongitudeRef}
                businessFormOverlayRef={businessFormOverlayRef}
            />
        </main>
    );
};

export default App;
