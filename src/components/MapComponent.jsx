import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapComponent.css";

// 📍 Custom Drone Icon
const droneIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", 
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
});

const MapComponent = ({ coordinates, index, visited }) => {
  const currentPosition = coordinates[index]; // Current drone location

  return (
    <MapContainer
      center={[20, 78]}
      zoom={4}
      style={{ width: "100%", height: "500px" }}
      worldCopyJump={false}
      maxBounds={[
        [-90, -180], // Southwest
        [90, 180],   // Northeast
      ]}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* 🛤️ Draw path only for visited locations */}
      {visited.length > 1 && (
        <Polyline positions={visited.map(p => [p.lat, p.lng])} color="red" weight={4} />
      )}

      {/* 📍 Moving Drone Marker */}
      {currentPosition && (
        <Marker position={[currentPosition.lat, currentPosition.lng]} icon={droneIcon}>
          <Popup>Drone Position: {index + 1}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapComponent;
