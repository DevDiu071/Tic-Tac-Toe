import React from "react";
import Image from "next/image";
import xImg from "@/public/images/icon-x.svg";
import oImg from "@/public/images/icon-o.svg";
import PlayerMark from "./PlayerMark";
import ButtonSolo from "./ButtonSolo";
import ButtonMulti from "./ButtonMulti";

export default function Home() {
  return (
    <div className="max-w-[400px] mx-auto px-[24px]">
      <div className="flex justify-center mt-[118px] gap-x-3 items-center">
        <Image src={xImg} alt="icon x" className="w-[32px] h-[32px]" />
        <Image src={oImg} alt="icon o" className="w-[31px] h-[31px]" />
      </div>
      <PlayerMark />
      <ButtonSolo />
      <ButtonMulti />
    </div>
  );
}
