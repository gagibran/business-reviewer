// More information: https://github.com/smeijer/leaflet-geosearch#using-with-react-leaflet

import { EsriProvider, GeoSearchControl } from "leaflet-geosearch"
import { useEffect } from "react"
import { useMap } from "react-leaflet"
import "leaflet-geosearch/assets/css/leaflet.css"
import defaultMarkerIcon from "../constants/defaultMarkerIcon"

const SearchAddress = () => {
    const map = useMap();

    // @ts-ignore
    const searchControl = new GeoSearchControl({
        style: 'bar',
        autoCompleteDelay: 250,
        provider: new EsriProvider(),
        notFoundMessage: 'Sorry, that address could not be found.',
        searchLabel: 'Enter address.',
        marker: {
            icon: defaultMarkerIcon,
            alt: 'Marker'
        },
    });

    useEffect(() => {
        map.addControl(searchControl);
        map.locate().on("locationfound", e => {
            map.flyTo(e.latlng, map.getZoom());
        });
    });

    return null;
};

export default SearchAddress;