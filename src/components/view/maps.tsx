"use client";
import {
  MapContainer,
  TileLayer,
  Marker as LMarker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";

const LmarkerIcon = new L.Icon({
  iconUrl: markerIcon.src,
  iconSize: [25, 40],
  iconAnchor: [12, 41],
});

interface Props {
  center?: L.LatLngExpression;
  width: number | string;
  height: number | string;
  children?: React.ReactNode;
}

export const Marker = ({ position }: { position: L.LatLngExpression }) => (
  <LMarker
    position={position}
    icon={LmarkerIcon}
    key={position.toString()}
  ></LMarker>
);

export function Map({ center, width, height, children }: Props) {
  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        width,
        height,
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {children}
    </MapContainer>
  );
}
