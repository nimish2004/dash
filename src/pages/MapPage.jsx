// src/pages/MapPage.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Optional: Default marker fix for Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-80px)] flex-1 overflow-y-auto pl-64">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-black">Map</h2>
      <div className="h-full rounded-lg shadow overflow-hidden">
        <MapContainer
          center={[26.834726099340752, 75.7788968231488]} // Example: New Delhi coordinates
          zoom={6}
          scrollWheelZoom={true}
          className="h-full w-full z-10"
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[26.834726099340752, 75.7788968231488]}>
            <Popup>
              Admin HQ <br /> Jaipur
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;
