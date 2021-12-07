import { Action } from "../interfaces/action";
import "../styles/NavAction.scss";

const NavAction = function ({ icon, actionRoute, actionName }: Action) {
    return (
        <a href={actionRoute} className="side-navbar__action">
            {icon}
            <span>{actionName}</span>
        </a>
    );
};

export default NavAction;