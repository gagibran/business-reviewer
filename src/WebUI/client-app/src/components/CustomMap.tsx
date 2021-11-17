import "../styles/CustomMap.scss";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";

const CustomMap = function () {
    const getCoords = function () {
        const coords: Array<number> = []
        navigator.geolocation.getCurrentPosition(position => {
            coords.push(position.coords.latitude);
            coords.push(position.coords.longitude);
        }, () => alert("Error: Could not get current coordinates."));
        return coords;
    };

    return (
        <main className="map" id="map">
            {getCoords()}
            <MapContainer
                className="map__map-container"
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={true}
                zoomControl={false}
            >
                <ZoomControl position="topright" />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </main>
    );
};

export default CustomMap;