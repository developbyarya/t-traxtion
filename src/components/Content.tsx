import dynamic from "next/dynamic";
import Bpm from "./view/bpm";
import Oxi from "./view/oxygen";
import Cal from "./view/miniCalories";
import { MiniMonoxide } from "./view/monoxide";
export default function Content() {
  const MiniMaps = dynamic(() => import("./view/miniMaps"), { ssr: false });
  return (
    <div className="content">
      <MiniMaps />
      <Bpm />
      <Oxi />
      <Cal />
      <MiniMonoxide />
    </div>
  );
}
