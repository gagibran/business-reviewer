// More information: https://github.com/smeijer/leaflet-geosearch#using-with-react-leaflet

import { useEffect } from "react"
import { useMap } from "react-leaflet"
import { EsriProvider, GeoSearchControl } from "leaflet-geosearch"
import defaultMarkerIcon from "../constants/defaultMarkerIcon"
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
                alt: 'Marker'
            },
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
                    const reviewFormOverlay = document.getElementById('reviewFormOverlay');
                    reviewFormOverlay?.classList.toggle('hidden');
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
