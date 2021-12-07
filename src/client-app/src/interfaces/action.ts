import { ReactElement } from "react";

export interface Action {
    icon: ReactElement<any, any>,
    actionRoute: string,
    actionName: string
}
