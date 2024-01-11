import Image from "next/image";
export default function Nav() {
  return (
    <nav className="navbar">
      <Image
        src={"/assets/t-traxtion.png"}
        width={200}
        alt="t-traxtion logo"
        height={100}
      />
      <Image
        src={"/assets/Icon Notification.png"}
        width={50}
        alt="t-traxtion logo"
        height={50}
      />
    </nav>
  );
}
