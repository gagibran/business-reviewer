import { makeAutoObservable } from "mobx";
import { businessesRequests } from "../api/requests";

export default class BusinessStore {

    constructor() {
        makeAutoObservable(this);
    }

    postBusiness = async (
        userId: string,
        businessName: string,
        businessAddress: string,
        businessType: string,
        businessLatitude: number,
        businessLongitude: number
    ) => {
        try {
            await businessesRequests.post(
                '',
                {
                    userId: userId,
                    businessName: businessName,
                    businessAddress: businessAddress,
                    businessType: businessType,
                    businessLatitude: businessLatitude,
                    businessLongitude: businessLongitude
                }
            );
        } catch (error) {
            console.log(error);
        }
    };
}
