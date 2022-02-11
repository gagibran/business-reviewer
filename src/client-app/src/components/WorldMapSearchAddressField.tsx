// More information: https://github.com/smeijer/leaflet-geosearch#using-with-react-leaflet

import LeafletLocationEvent from "../common/interfaces/leafletExtentions";
import { MutableRefObject, useEffect } from "react"
import { useMap } from "react-leaflet"
import { EsriProvider, GeoSearchControl } from "leaflet-geosearch"
import { defaultMarkerIcon } from "../common/constants/defaultMarkerIcon"
import { LeafletEvent } from "leaflet"
import "leaflet-geosearch/assets/css/leaflet.css"

interface Props {
    businessAddressRef: MutableRefObject<HTMLInputElement>,
    businessLatitudeRef: MutableRefObject<HTMLInputElement>,
    businessLongitudeRef: MutableRefObject<HTMLInputElement>,
    businessFormOverlayRef: MutableRefObject<HTMLDivElement>
}

const WorldMapSearchAddressField = function (
    {
        businessAddressRef,
        businessLatitudeRef,
        businessLongitudeRef,
        businessFormOverlayRef
    }: Props
) {
    const map = useMap();

    const onMapShowLocation = function (e: LeafletEvent) {
        const eLEafletLocationEvent = e as LeafletLocationEvent;
        eLEafletLocationEvent.marker._events.click.push(
            {
                ctx: undefined,
                fn: () => {
                    businessFormOverlayRef.current.classList.remove(
                        'app-form-overlay--hidden',
                        'app-form-overlay--fadeout'
                    );
                    businessAddressRef.current.value = eLEafletLocationEvent.location.raw.name;
                    businessLatitudeRef.current.value = eLEafletLocationEvent.location.x.toString();
                    businessLongitudeRef.current.value = eLEafletLocationEvent.location.y.toString();
                }
            }
        );
    };

    const onMapLocationError = function () {
        alert('Could not find your current location.')
    };

    // @ts-ignore
    useEffect(() => {
        const searchControl = new (GeoSearchControl as any)(
            {
                style: 'bar',
                autoCompleteDelay: 250,
                provider: new EsriProvider(),
                notFoundMessage: 'Sorry, that address could not be found.',
                searchLabel: 'Enter an address to add a business.',
                marker: {
                    icon: defaultMarkerIcon,
                    alt: 'Marker',
                    keyboard: true,
                    title: 'Click on this marker to register this address as a business.'
                }
            }
        );
        map.addControl(searchControl);
        map.locate({ setView: true, maxZoom: 16 }).on("locationerror", onMapLocationError);
        map.on('geosearch/showlocation', onMapShowLocation);
        return () => map.removeControl(searchControl);
    });

    return null;
};

export default WorldMapSearchAddressField;
