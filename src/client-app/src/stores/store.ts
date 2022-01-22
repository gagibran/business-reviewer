import { createContext, useContext } from "react";
import BusinessStore from "./businessStore";
import ReviewStore from "./reviewStore";

interface Store {
    // Classes (i.e. BusinessStore) can also be use as types.
    businessStore: BusinessStore,
    reviewStore: ReviewStore
}

// New stores will be added to this object as they are implemented.
export const store: Store = {
    businessStore: new BusinessStore(),
    reviewStore: new ReviewStore()
};

// Creates a store context to be used throughout the app.
export const StoreContext = createContext(store);

// Creating a custom hook to make the code reusable.
export const useStore = function () {
    return useContext(StoreContext);
};
