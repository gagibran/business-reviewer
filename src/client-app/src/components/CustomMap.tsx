// More information: https://github.com/PaulLeCam/react-leaflet#react-leaflet-

import "../styles/CustomMap.scss";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import SearchAddressField from "./SearchAddressField";

const CustomMap = function () {
    return (
        <main className="map" id="map">
            <MapContainer
                className="map__map-container"
                center={[51.5072, 0.1276]}
                zoom={13}
                scrollWheelZoom={true}
                zoomControl={false}
            >
                <ZoomControl position="topright" />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <SearchAddressField />
            </MapContainer>
        </main>
    );
};

export default CustomMap;