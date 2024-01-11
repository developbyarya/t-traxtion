"use client";
import View from "./base";
import { listenChanges } from "@/utils/realtime";
import { useState, useEffect } from "react";

export default function Bpm() {
  const [bpm, setBpm] = useState<number>(0);
  useEffect(() => {
    listenChanges<number>("pulse_oximeter/bpm", (data) => {
      setBpm(data);
    });
  }, []);
  return (
    <View title="Heart beat" icon="Icon detak jantung OPSI.png" href="/bpm">
      {bpm} bpm
    </View>
  );
}
