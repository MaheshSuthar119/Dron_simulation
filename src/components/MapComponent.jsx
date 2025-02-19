import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./MapComponent.css";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ coordinates }) => {
  return (
    <MapContainer
    center={[20, 78]}
    zoom={4}
    style={{ width: "100%", height: "500px" }}
    worldCopyJump={false} // Prevents map wraparound
    maxBounds={[
      [-90, -180], // Southwest corner
      [90, 180],   // Northeast corner
    ]}
    maxBoundsViscosity={1.0} // Strictly restricts movement
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
       
      {coordinates.map((point, index) => (
        <Marker key={index} position={[point.lat, point.lng]}>
          <Popup>Drone Position {index + 1}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;



// import React, { useEffect, useRef } from "react";
// import mapboxgl from "mapbox-gl";

// mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

// const MapComponent = ({ coordinates, index }) => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const marker = useRef(null);

//   useEffect(() => {
//     if (!map.current) {
//       map.current = new mapboxgl.Map({
//         container: mapContainer.current,
//         style: "mapbox://styles/mapbox/streets-v11",
//         center: [0, 0],
//         zoom: 2,
//       });
//     }
//   }, []);

//   useEffect(() => {
//     if (map.current && coordinates.length > 0) {
//       if (!marker.current) {
//         marker.current = new mapboxgl.Marker()
//           .setLngLat([coordinates[0].lng, coordinates[0].lat])
//           .addTo(map.current);
//       }
//       if (index < coordinates.length) {
//         marker.current.setLngLat([coordinates[index].lng, coordinates[index].lat]);
//         map.current.flyTo({ center: [coordinates[index].lng, coordinates[index].lat], zoom: 5 });
//       }
//     }
//   }, [index, coordinates]);

//   return <div ref={mapContainer} style={{ width: "100%", height: "500px" }} />;
// };

// export default MapComponent;
