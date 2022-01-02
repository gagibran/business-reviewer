import "../styles/Nav.scss";
import NavAction from "./NavAction";
import { ProfileInfo } from "../common/interfaces/profileInfo";
import { MdOutlineRateReview } from "react-icons/md";
import { BiCog } from "react-icons/bi";
import { AiOutlineHome, AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";

const Nav = function ({ userName, profilePictureSrc }: ProfileInfo) {
    const [navbar, setNavbar] = useState(false);
    const deactivatedNavClassName = !navbar ? '--deactivated' : '';

    return (
        <nav className={'side-navbar' + deactivatedNavClassName}>
            <AiOutlineArrowLeft
                className={'side-navbar__arrow' + deactivatedNavClassName}
                onClick={() => setNavbar(!navbar)}
            />
            <a className={'side-navbar__brand' + deactivatedNavClassName}
                href="/"
            >
                {navbar ? 'Business Review' : 'BR'}
            </a>
            <hr className="side-navbar__separator" />
            <img
                src={profilePictureSrc}
                alt={userName}
                className={'side-navbar__profile-picture' + deactivatedNavClassName}
            />
            <p
                className={'side-navbar__user-name' + deactivatedNavClassName}
            >
                {userName}
            </p>
            <hr className="side-navbar__separator" />
            <NavAction
                deactivatedNavClassName={deactivatedNavClassName}
                icon={<AiOutlineHome />}
                actionRoute="/"
                actionName="Home"
            />
            <NavAction
                deactivatedNavClassName={deactivatedNavClassName}
                icon={<MdOutlineRateReview />}
                actionRoute="/"
                actionName="My Reviews"
            />
            <NavAction
                deactivatedNavClassName={deactivatedNavClassName}
                icon={<BiCog />}
                actionRoute="/"
                actionName="Settings"
            />
        </nav>
    );
};

export default Nav;