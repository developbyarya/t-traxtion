"use client";
import { listenChanges } from "@/utils/realtime";
import { useState, useEffect } from "react";

export default function Indicator() {
  const [co, setCo] = useState(0);
  useEffect(() => {
    listenChanges<number>("co/data", (data) => {
      setCo(data);
    });
  }, []);
  return (
    <div className="indicator">
      <p>Level: {co}</p>
      <div className={`level ${co > 150 ? "high" : "normal"}`}></div>
      <p>{co > 150 ? "high" : "normal"}</p>
    </div>
  );
}
