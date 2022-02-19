import BusinessForm from "./components/BusinessForm";
import ReviewForm from "./components/ReviewForm";
import SideNav from "./components/SideNav";
import WorldMap from "./components/WorldMap";
import { MutableRefObject, useRef } from "react";
import { v4 } from "uuid"; // Delete after adding proper DB querying.
import "./styles/App.scss";

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
                userId={v4()} // This will come from the DB later on.
                businessAddressRef={businessAddressRef}
                businessLatitudeRef={businessLatitudeRef}
                businessLongitudeRef={businessLongitudeRef}
                businessFormOverlayRef={businessFormOverlayRef}
            />
            <ReviewForm
                reviewerId={v4()} // This will come from the DB later on.
                businessId={v4()} // This will come from the DB later on.
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
