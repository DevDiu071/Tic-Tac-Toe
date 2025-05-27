"use client";

import React from "react";
import Image from "next/image";
import xImg from "@/public/images/icon-x.svg";
import oImg from "@/public/images/icon-o.svg";
import restartImg from "@/public/images/icon-restart.svg";
import { useGame } from "../_context/GameContext";

export default function Header() {
  const { isxNext, setShowRestart } = useGame();
  return (
    <div className="flex items-center justify-around mb-[68px] mt-[24px]">
      <div className="flex justify-center  gap-x-3 items-center">
        <Image src={xImg} alt="icon x" className="w-[32px] h-[32px]" />
        <Image src={oImg} alt="icon o" className="w-[31px] h-[31px]" />
      </div>
      <div className="flex items-center gap-x-[9px] rounded-[5px] bg-semi-dark-navy px-[15px] pt-[9px] pb-[13px]">
        {isxNext ? (
          <Image src={xImg} alt="icon x" className="w-[16px] h-[16px]" />
        ) : (
          <Image src={oImg} alt="icon x" className="w-[16px] h-[16px]" />
        )}
        <p className="text-silver text-[14px] font-bold">TURN</p>
      </div>
      <div
        onClick={() => {
          setShowRestart(true);
        }}
        className="bg-silver cursor-pointer p-[12px] rounded-[5px] restart-shadow "
      >
        <Image
          src={restartImg}
          alt="icon resart"
          className="w-[15px] h-[15px]"
        />
      </div>
    </div>
  );
}
