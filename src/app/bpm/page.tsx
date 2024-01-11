import { getBpm } from "@/utils/firestore";
import HomeButton from "@/components/homebutton";
import dynamic from "next/dynamic";
export default async function Page() {
  const data = await getBpm();
  console.log(data);
  const Chart = dynamic(() => import("@/components/view/chart"), {
    ssr: false,
  });
  return (
    <>
      BPM
      <Chart data={data} xKey="data" yKey="timestamp" />
      <HomeButton />
    </>
  );
}
