import dynamic from "next/dynamic";
import HomeButton from "@/components/homebutton";
// import Client from "./client";
const Client = dynamic(() => import("./client"), { ssr: false });
export default async function Page() {
  return (
    <>
      <Client />
      <HomeButton />
    </>
  );
}
