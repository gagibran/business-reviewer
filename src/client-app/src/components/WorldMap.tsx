// More information: https://github.com/PaulLeCam/react-leaflet#react-leaflet-

import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import WorldMapSearchAddressField from "./WorldMapSearchAddressField";
import { MutableRefObject } from "react";
import "leaflet/dist/leaflet.css";
import "../styles/WorldMap.scss";

interface Props {
    businessAddressRef: MutableRefObject<HTMLInputElement>,
    businessLatitudeRef: MutableRefObject<HTMLInputElement>,
    businessLongitudeRef: MutableRefObject<HTMLInputElement>,
    businessFormOverlayRef: MutableRefObject<HTMLDivElement>
}

const WorldMap = function (
    {
        businessAddressRef,
        businessLatitudeRef,
        businessLongitudeRef,
        businessFormOverlayRef
    }: Props
) {
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
                <WorldMapSearchAddressField
                    businessAddressRef={businessAddressRef}
                    businessLatitudeRef={businessLatitudeRef}
                    businessLongitudeRef={businessLongitudeRef}
                    businessFormOverlayRef={businessFormOverlayRef}
                />
            </MapContainer>
        </main>
    );
};

export default WorldMap;
