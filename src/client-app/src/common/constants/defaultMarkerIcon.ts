import L from "leaflet";
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconShadow from 'leaflet/dist/images/marker-shadow.png';

export const defaultMarkerIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerIconShadow
});
