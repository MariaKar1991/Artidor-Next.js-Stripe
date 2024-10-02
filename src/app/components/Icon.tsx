import { IconType } from "react-icons";
import Image from "next/image";
import { GiNestedHexagons } from "react-icons/gi";
import Link from "next/link";

interface IconProps {
  icon?: IconType;
  size?: "sm" | "lg";
  link?: string;
  imgSrc?: string;
}

export default function Icon({
  icon: Icon,
  size = "sm",
  link,
  imgSrc,
}: IconProps) {
  const iconContent = (
    <div
      className={`relative flex-center border-2 ring-1
         bg-sky-950 rounded-full overflow-hidden border-slate-950 ring-sky-800
         ${size === "lg" ? "w-16 h-16" : "w-12 h-12"}
         ${link ? "cursor-pointer" : ""}`}
    >
      {Icon && (
        <Icon className={`z-10 ${size === "lg" ? "w-8 h-8" : "w-5 h-5"}`} />
      )}
      {imgSrc && (
        <Image
          src={imgSrc}
          alt="logo"
          width={45}
          height={45}
          className="z-10"
        />
      )}
      <GiNestedHexagons
        className={`absolute z-0 text-sky-900 ${
          size === "lg" ? "w-14 h-14" : "w-10 h-10"
        }`}
      />
    </div>
  );
  return link ? <Link href={link}>{iconContent}</Link> : iconContent;
}
