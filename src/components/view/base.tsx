import Link from "next/link";
import Image from "next/image";

interface IView {
  icon: string;
  title: string;
  href: string;
  children?: React.ReactNode;
}
export default function View(props: IView) {
  return (
    <Link className="view" href={props.href}>
      <div className="wrapper">
        <Image
          src={"/assets/" + props.icon}
          alt="icon"
          width={77}
          height={75}
        />
        <h1 className="title">{props.title}</h1>
      </div>
      {props.children}
    </Link>
  );
}
