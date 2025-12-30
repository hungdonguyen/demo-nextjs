"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapContent() {
  return (
    <MapContainer
      center={[11.052659, 106.665981]}
      zoom={17}
      scrollWheelZoom={true}
      className="h-[500px] w-full rounded-md z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />


    </MapContainer>
  );
}