// More information: https://github.com/PaulLeCam/react-leaflet#react-leaflet-

import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import WorldMapSearchAddressField from "./WorldMapSearchAddressField";
import MapProps from "../common/interfaces/mapProps";
import "../styles/WorldMap.scss";
import "leaflet/dist/leaflet.css";

const WorldMap = function ({ businessFormRefs }: MapProps) {
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
                <WorldMapSearchAddressField businessFormRefs={businessFormRefs} />
            </MapContainer>
        </main>
    );
};

export default WorldMap;
