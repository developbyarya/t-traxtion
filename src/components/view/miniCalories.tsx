"use client";
import View from "./base";
import { listenChanges } from "@/utils/realtime";
import { useState, useEffect } from "react";
import {
  formatEpochWithHourtoWithout,
  getTotalDistance,
  haversineDistance,
} from "@/utils/helper";

export default function Cal() {
  const [cal, setCal] = useState<number>(0);
  let lokasiData: any[], calories: number;
  useEffect(() => {
    fetch(
      "/api/location?date=" + formatEpochWithHourtoWithout(new Date().getTime())
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.length == 0) {
          return;
        }
        console.log(res);
        const clean = res;
        lokasiData = clean;
        // get jarak
        const jarak = +(getTotalDistance(clean) / 1000).toFixed(3);
        // calories
        calories = jarak * 60;

        setCal(calories);

        listenChanges<{ lat: number; long: number }>("lokasi", (data) => {
          if (!lokasiData.length) return;
          const { lat, long } = data;

          const newDist = haversineDistance(
            lokasiData[lokasiData.length - 1][0],
            lokasiData[lokasiData.length - 1][1],
            lat,
            long
          );
          const newCal = +(newDist / 1000) * 60;
          calories += newCal;
          setCal(+calories.toFixed(2));
        });
      });
  }, []);
  return (
    <View title="Calories" icon="Icon kalori OPSi.png" href="#">
      {cal} kcal
    </View>
  );
}
