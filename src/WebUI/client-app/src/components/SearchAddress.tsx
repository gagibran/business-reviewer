// More information: https://github.com/smeijer/leaflet-geosearch#using-with-react-leaflet

import { EsriProvider, GeoSearchControl } from "leaflet-geosearch"
import { useEffect } from "react"
import { useMap } from "react-leaflet"
import "leaflet-geosearch/assets/css/leaflet.css"
import { icon, Marker } from "leaflet";
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = icon({
    iconUrl: markerIcon,
    shadowUrl: markerIconShadow
});

Marker.prototype.options.icon = defaultIcon;

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
            icon: defaultIcon,
        },
    });

    useEffect(() => {
        map.addControl(searchControl);
    });

    return null;
};

export default SearchAddress;