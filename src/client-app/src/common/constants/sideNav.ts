import { BiCog } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineRateReview, MdBusiness } from "react-icons/md";

export const SIDE_NAV_ACTIONS = [
    {
        actionName: 'Home',
        actionRoute: '/',
        icon: AiOutlineHome
    },
    {
        actionName: 'My Reviews',
        actionRoute: '/',
        icon: MdOutlineRateReview
    },
    {
        actionName: 'My Businesses',
        actionRoute: '/',
        icon: MdBusiness
    },
    {
        actionName: 'Settings',
        actionRoute: '/',
        icon: BiCog
    },
];
