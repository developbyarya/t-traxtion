"use client";
import { Marker, Polyline, TileLayer } from "react-leaflet";
import { Map } from "@/components/view/maps";
import { listenChanges } from "@/utils/realtime";
import { LatLngExpression, Icon } from "leaflet";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useMap, useMapEvent } from "react-leaflet";
import { formatEpochWithHourtoWithout, getTotalDistance } from "@/utils/helper";
import markerIcon from "leaflet/dist/images/marker-icon.png";

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

function MapPolyline({
  date,
  setter,
}: {
  date: number;
  setter: Dispatch<SetStateAction<number>>;
}) {
  const [pos, setPos] = useState<LatLngExpression[] | null>(null);
  useEffect(() => {
    fetch("/api/location?date=" + date.toString())
      .then((res) => res.json())
      .then((res) => {
        if (res.length === 0) {
          setPos(null);
          return;
        }
        setPos(res);
        setter(+(+(getTotalDistance(res) / 1000).toFixed(2)));
      });
  }, [date]);
  return pos === null ? null : <Polyline positions={pos} />;
}

export default function Client() {
  const pos: LatLngExpression = [-7.779, 110.3931];
  const today = new Date().toISOString().substring(0, 10);
  const [date, setDate] = useState(today);
  const [range, setRange] = useState(0);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  return (
    <>
      <input type="date" value={date} onChange={onChange} />

      <Map width={"80%"} height={"80vh"} center={pos}>
        <RTMarker />
        <MapPolyline
          date={formatEpochWithHourtoWithout(new Date(date).getTime())}
          setter={setRange}
        />
      </Map>
      <h1>Total distance: {range} km</h1>
    </>
  );
}
