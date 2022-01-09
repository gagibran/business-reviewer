import axios from "axios";

// Axios is responsible for actually fetching the API.
export const reviewsRequests = axios.create({
    baseURL: 'https://localhost:5001/api/reviews'
});

export const businessesRequests = axios.create({
    baseURL: 'https://localhost:5001/api/businesses'
});
