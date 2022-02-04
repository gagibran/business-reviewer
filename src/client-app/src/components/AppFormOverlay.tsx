import { MouseEvent as ReactMouseEvent, MutableRefObject, ReactChild } from "react";
import { TIMEOUT } from "../common/constants/form";
import { animateOverlayFadeout } from "../common/functions/functions";
import "../styles/AppFormOverlay.scss";

interface Props {
    id: string,
    overlayRef: MutableRefObject<HTMLDivElement>,
    children: ReactChild
}

const AppFormOverlay = function ({ id, overlayRef, children }: Props) {
    const onOverlayClose = function (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) {
        if (e.target === overlayRef.current) {
            animateOverlayFadeout(
                'app-form-overlay--fadeout',
                'app-form-overlay--hidden',
                overlayRef.current,
                TIMEOUT
            );
        }
    };

    return (
        <div
            id={id}
            className="app-form-overlay app-form-overlay--fadeout app-form-overlay--hidden"
            ref={overlayRef}
            onClick={onOverlayClose}
        >
            {children}
        </div>
    );
};

export default AppFormOverlay;