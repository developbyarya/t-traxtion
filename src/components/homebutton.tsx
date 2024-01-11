import Image from "next/image";
import Link from "next/link";

export default function HomeButton() {
  return (
    <Link href={"/"}>
      <Image src={"/assets/Icon home.png"} alt="home" width={80} height={80} />
    </Link>
  );
}
