import { Action } from "../interfaces/action";
import "../styles/Nav.scss";

const NavAction = function ({ icon, actionRoute, actionName, deactivatedNavClassName }: Action) {
    return (
        <a href={actionRoute} className={'side-navbar__action' + deactivatedNavClassName}>
            {icon}
            <span>{actionName}</span>
        </a>
    );
};

export default NavAction;