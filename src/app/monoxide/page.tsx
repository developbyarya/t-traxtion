import { getCo } from "@/utils/firestore";
import dynamic from "next/dynamic";
import Indicator from "./indicator";
import HomeButton from "@/components/homebutton";
export default async function Page() {
  const Chart = dynamic(() => import("@/components/view/chart"), {
    ssr: false,
  });
  const data = await getCo();
  console.log(data);
  return (
    <>
      <Chart data={data} xKey="data" yKey="timestamp" />
      <Indicator />
      <HomeButton />
    </>
  );
}
