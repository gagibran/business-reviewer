export interface Review {
    id: string;
    businessName: string;
    businessType: string;
    businessAddress: string;
    reviewerUsername: string;
    reviewerName: string;
    reviewTitle: string;
    reviewGrade: number;
    reviewDescription: string;
    dateCreated: Date;
}
