import { ReactElement } from "react";
import "../styles/SideNav.scss";

interface Props {
    icon: ReactElement<any, any>,
    actionRoute: string,
    actionName: string,
    deactivatedNavClassName: string
}

const SideNavAction = function ({ icon, actionRoute, actionName, deactivatedNavClassName }: Props) {
    return (
        <a href={actionRoute} className={'side-navbar__action' + deactivatedNavClassName}>
            {icon}
            <span>{actionName}</span>
        </a>
    );
};

export default SideNavAction;