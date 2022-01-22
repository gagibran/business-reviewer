import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./components/App";
import { store, StoreContext } from "./stores/store";

ReactDOM.render(
    <React.StrictMode>
        {/* Providing the store context to the whole app. */}
        {/* By doing that, every component can access the states */}
        {/* stored in the store. */}
        <StoreContext.Provider value={store}>
            <App />
        </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
