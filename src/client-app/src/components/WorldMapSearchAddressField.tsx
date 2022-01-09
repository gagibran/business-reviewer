// More information: https://github.com/smeijer/leaflet-geosearch#using-with-react-leaflet

import { useEffect } from "react"
import { useMap } from "react-leaflet"
import { EsriProvider, GeoSearchControl } from "leaflet-geosearch"
import { defaultMarkerIcon } from "../common/constants/defaultMarkerIcon"
import MapProps from "../common/types/mapProps"
import "leaflet-geosearch/assets/css/leaflet.css"
import LeafletLocationEvent from "../common/types/leafletExtentions";

const WorldMapSearchAddressField = function ({ refs }: MapProps) {
    const map = useMap();

    // @ts-ignore
    useEffect(() => {
        // @ts-ignore
        const searchControl = new GeoSearchControl({
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
        });
        map.addControl(searchControl);
        map.locate({ setView: true, maxZoom: 16 })
            .on("locationerror", () => {
                alert('Could not find your current location.')
            });
        map.on('geosearch/showlocation', (e) => {
            (e as LeafletLocationEvent).marker._events.click.push({
                ctx: undefined,
                fn: () => {
                    refs.overlayRef.current.classList.remove('app-form-overlay--hidden');
                    refs.overlayRef.current.classList.remove('app-form-overlay--fadeout');
                    refs.businessAddressRef.current.value = (e as LeafletLocationEvent).location.raw.name;
                    refs.businessLatitudeRef.current.value = ((e as LeafletLocationEvent).location.x).toString();
                    refs.businessLongitudeRef.current.value = ((e as LeafletLocationEvent).location.y).toString();
                }
            });
        });
        return () => map.removeControl(searchControl);
    });

    return null;
};

export default WorldMapSearchAddressField;
