"use client";
import View from "./base";
import { useState, useEffect } from "react";
import { listenChanges } from "@/utils/realtime";
import { LatLngExpression, Icon } from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import { useMap, useMapEvent, Marker } from "react-leaflet";
import { Map } from "@/components/view/maps";

const LmarkerIcon = new Icon({
  iconUrl: markerIcon.src,
  iconSize: [25, 40],
  iconAnchor: [12, 41],
});
function RTMarker() {
  const [pos, setPos] = useState<LatLngExpression | null>(null);
  const map = useMap();

  useEffect(() => {
    listenChanges<{ lat: number; long: number }>("lokasi", (data) => {
      console.log(data);
      setPos([data.lat, data.long]);
    });
  }, []);
  useEffect(() => {
    if (pos) {
      map.flyTo(pos, map.getZoom());
    }
  }, [pos]);
  return pos === null ? null : <Marker position={pos} icon={LmarkerIcon} />;
}

export default function MiniMaps() {
  const pos: LatLngExpression = [-7.779, 110.3931];
  return (
    <View title="Location" icon="Icon lokasi OPSI.png" href="/location">
      <Map center={pos} width="80%" height="250px">
        <RTMarker />
      </Map>
    </View>
  );
}
