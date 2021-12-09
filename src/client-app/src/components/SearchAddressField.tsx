// More information: https://github.com/smeijer/leaflet-geosearch#using-with-react-leaflet

import { useEffect } from "react"
import { useMap } from "react-leaflet"
import { EsriProvider, GeoSearchControl } from "leaflet-geosearch"
import defaultMarkerIcon from "../constants/defaultMarkerIcon"
import "leaflet-geosearch/assets/css/leaflet.css"
import { SearchResult } from "leaflet-geosearch/dist/providers/provider"

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
            popupFormat: (args: { query: Selection, result: SearchResult }) => {
                // REMOVE THIS FROM HERE AND MAKE IT A POPUP ON PAGE LOAD.
                return args.result.label + '. Click on the marker to add a review.';
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
                    const reviewFormOverlay = document.getElementById('reviewFormOverlay');
                    reviewFormOverlay?.classList.remove('hidden');
                    reviewFormOverlay?.classList.remove('fadeout');
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
