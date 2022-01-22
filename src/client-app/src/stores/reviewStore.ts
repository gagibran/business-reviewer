import { makeAutoObservable } from "mobx";
import { reviewsRequests } from "../api/requests";
import Review from "../common/entities/review";

export default class ReviewStore {
    reviews: Review[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    loadReviewsFromDb = async () => {
        try {
            const reviewsFromDb = await reviewsRequests.get<Review[]>('/');
            reviewsFromDb.data.forEach(reviewFromDb => {
                this.reviews.push(reviewFromDb);
            });
        } catch (error) {
            console.log(error);
        }
    };
}
