// More information: https://github.com/smeijer/leaflet-geosearch#using-with-react-leaflet

import { useEffect } from "react"
import { useMap } from "react-leaflet"
import { EsriProvider, GeoSearchControl } from "leaflet-geosearch"
import defaultMarkerIcon from "../common/constants/defaultMarkerIcon"
import "leaflet-geosearch/assets/css/leaflet.css"

const SearchAddressField = () => {
    const map = useMap();

    // @ts-ignore
    useEffect(() => {
        // @ts-ignore
        const searchControl = new GeoSearchControl({
            style: 'bar',
            autoCompleteDelay: 250,
            provider: new EsriProvider(),
            notFoundMessage: 'Sorry, that address could not be found.',
            searchLabel: 'Enter an address.',
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
            // @ts-ignore
            e.marker._events.click.push({
                ctx: undefined,
                fn: () => {
                    const businessFormOverlay = document.getElementById('businessFormOverlay');
                    businessFormOverlay?.classList.remove('app-form-overlay--hidden');
                    businessFormOverlay?.classList.remove('app-form-overlay--fadeout');
                    // @ts-ignore
                    (document.getElementById('businessAddress') as HTMLInputElement).value = e.location.raw.name;
                    // @ts-ignore
                    (document.getElementById('businessLatitude') as HTMLInputElement).value = e.location.x;
                    // @ts-ignore
                    (document.getElementById('businessLongitude') as HTMLInputElement).value = e.location.y;
                }
            });
        });
        return () => map.removeControl(searchControl);
    });

    return null;
};

export default SearchAddressField;
