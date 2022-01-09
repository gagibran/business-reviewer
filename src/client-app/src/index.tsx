import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import SideNav from "./components/SideNav";
import ReviewForm from "./components/ReviewForm";
import BusinessForm from "./components/BusinessForm";
import { v4 } from "uuid";
import "./styles/reset.scss";

ReactDOM.render(
    <React.StrictMode>
        <SideNav
            userName="Joanna Johnson"
            userEmail="joanna.johnson@example.com"
            profilePictureSrc="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        />
        <ReviewForm reviewerId={v4()} businessId={v4()} />
        <BusinessForm userId={v4()} />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
