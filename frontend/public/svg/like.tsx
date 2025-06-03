import Image from "next/image";
import SVGIMG from "../like.svg";

export default function Like() {
    return (
       <Image src={SVGIMG} alt={"like"} width={24} height={24} unoptimized/>
    )
}