import { BiCog } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineRateReview, MdBusiness } from "react-icons/md";

export const SIDE_NAV_ACTIONS = {
    home: {
        actionName: 'Home',
        actionRoute: '/',
        icon: AiOutlineHome
    },
    myReviews: {
        actionName: 'My Reviews',
        actionRoute: '/',
        icon: MdOutlineRateReview
    },
    myBusinesses: {
        actionName: 'My Businesses',
        actionRoute: '/',
        icon: MdBusiness
    },
    settings: {
        actionName: 'Settings',
        actionRoute: '/',
        icon: BiCog
    },
};
