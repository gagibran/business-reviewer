export function animateOverlayFadeout(
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
