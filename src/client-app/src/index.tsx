import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.scss';
import reportWebVitals from './reportWebVitals';
import Nav from './components/Nav';
import CustomMap from './components/CustomMap';
import ReviewForm from './components/ReviewForm';

ReactDOM.render(
    <React.StrictMode>
        <Nav
            userName="Joanna Johnson"
            userEmail="joanna.johnson@example.com"
            profilePictureSrc="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        />
        <ReviewForm reviewerName="Test" reviewerUsername="test" />
        <CustomMap />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
