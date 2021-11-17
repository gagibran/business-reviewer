import "../styles/Nav.scss";
import NavAction from "./NavAction";
import { ProfileInfo } from "../interfaces/profileInfo";
import { MdOutlineRateReview } from "react-icons/md";
import { BiCog } from "react-icons/bi";
import { AiOutlineHome, AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";

const Nav = function ({ userName, profilePictureSrc }: ProfileInfo) {
    const [navbar, setNavbar] = useState(true);

    window.matchMedia('(max-width: 840px)').addEventListener("change", () => {
        return setNavbar(false);
    });

    return (
        <nav className={`side-navbar${!navbar ? ' deactivated' : ''}`}>
            <AiOutlineArrowLeft className="side-navbar__arrow" onClick={() => setNavbar(!navbar)} />
            <a className="side-navbar__brand" href="/"><span>Business Reviewer</span></a>
            <hr className="side-navbar__separator" />
            <img src={profilePictureSrc} alt={userName} className="side-navbar__profile-picture" />
            <p className="side-navbar__user-name">{userName}</p>
            <hr className="side-navbar__separator" />
            <NavAction icon={<AiOutlineHome className="side-navbar__icon" />} actionRoute="/" actionName="Home" />
            <NavAction icon={<MdOutlineRateReview className="side-navbar__icon" />} actionRoute="/" actionName="My Reviews" />
            <NavAction icon={<BiCog className="side-navbar__icon" />} actionRoute="/" actionName="Settings" />
        </nav>
    );
};

export default Nav;