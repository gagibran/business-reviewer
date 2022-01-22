export const animateOverlayFadeout = function (
    overlayFadeoutClass: string,
    overlayHiddenClass: string,
    overlay: any,
    timeout: number
) {
    overlay.classList.add(overlayFadeoutClass);
    setTimeout(() => {
        overlay?.classList.add(overlayHiddenClass);
    }, timeout);
};
