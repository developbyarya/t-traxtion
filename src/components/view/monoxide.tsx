"use client";
import View from "./base";
import { useState, useEffect } from "react";
import { listenChanges } from "@/utils/realtime";
export const MiniMonoxide = () => {
  const [co, setCo] = useState(0);
  useEffect(() => {
    listenChanges<number>("co/data", (data) => {
      setCo(data);
    });
  }, []);
  return (
    <View title="CO Level" icon="Icon kalori OPSi.png" href="/monoxide">
      {co}
    </View>
  );
};
