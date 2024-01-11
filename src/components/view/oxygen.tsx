"use client";
import View from "./base";
import { listenChanges } from "@/utils/realtime";
import { useState, useEffect } from "react";

export default function Oxi() {
  const [oxi, setOxi] = useState<number>(0);
  useEffect(() => {
    listenChanges<number>("pulse_oximeter/oxigen", (data) => {
      setOxi(data);
    });
  }, []);
  return (
    <View title="Oxygen" icon="Icon kadar oksigen OPSI.png" href="/oxygen">
      {oxi}%
    </View>
  );
}
