import SideNavAction from "./SideNavAction";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";
import "../styles/SideNav.scss";
import { SIDE_NAV_ACTIONS } from "../common/constants/sideNav";

interface Props {
    userName: string,
    userEmail: string,
    profilePictureSrc: string
}

const SideNav = function ({ userName, profilePictureSrc }: Props) {
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
            {SIDE_NAV_ACTIONS.map(action => {
                return (
                    <SideNavAction
                        deactivatedNavClassName={deactivatedNavClassName}
                        icon={<action.icon />}
                        actionRoute={action.actionRoute}
                        actionName={action.actionName}
                        key={action.actionName}
                    />
                );
            })}
        </nav>
    );
};

export default SideNav;