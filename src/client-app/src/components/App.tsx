import { useRef } from "react";
import { v4 } from "uuid";
import BusinessFormRefs from "../common/interfaces/businessFormRefs";
import { store, StoreContext } from "../stores/store";
import BusinessForm from "./BusinessForm";
import ReviewForm from "./ReviewForm";
import SideNav from "./SideNav";
import WorldMap from "./WorldMap";
import "../styles/App.scss";

const App = function () {

    const businessFormRefs: BusinessFormRefs = {
        overlayRef: useRef() as React.MutableRefObject<HTMLInputElement>,
        businessLongitudeRef: useRef() as React.MutableRefObject<HTMLInputElement>,
        businessLatitudeRef: useRef() as React.MutableRefObject<HTMLInputElement>,
        businessNameRef: useRef() as React.MutableRefObject<HTMLInputElement>,
        businessAddressRef: useRef() as React.MutableRefObject<HTMLInputElement>,
        businessTypeRef: useRef() as React.MutableRefObject<HTMLSelectElement>
    }

    return (
        <main>
            {/*
            Providing the store context to the whole app.
            By doing that, every component can access the states
            stored in the store.
            */}
            <StoreContext.Provider value={store}>
                <SideNav
                    userName="Joanna Johnson"
                    userEmail="joanna.johnson@example.com"
                    profilePictureSrc="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                />
                <ReviewForm reviewerId={v4()} businessId={v4()} />
                <BusinessForm businessFormRefs={businessFormRefs} userId={v4()} />
                <WorldMap businessFormRefs={businessFormRefs} />
            </StoreContext.Provider>
        </main>
    );
};

export default App;
