"use client";

import React from "react";
import { useGame } from "../_context/GameContext";

export default function Stats() {
  const { xWinCount, oWinCount, tieCount } = useGame();
  return (
    <div className="flex items-center gap-x-[20px] justify-center mt-[20px]">
      <div className="bg-light-blue w-[96px] leading-5 h-[64px] p-3 rounded-[10px] flex flex-col justify-center items-center ">
        <p className="text-[14px]">X (P2)</p>
        <p className="text-[20px] font-bold">{xWinCount}</p>
      </div>
      <div className="bg-silver  w-[96px] leading-5 h-[64px] p-3 rounded-[10px] flex flex-col justify-center items-center">
        <p className="text-[14px]">TIES</p>
        <p className="text-[20px] font-bold">{tieCount}</p>
      </div>
      <div className="bg-light-yellow  w-[96px] leading-5 h-[64px] p-3 rounded-[10px] flex flex-col justify-center items-center">
        <p className="text-[14px]">O (P1)</p>
        <p className="text-[20px] font-bold">{oWinCount}</p>
      </div>
    </div>
  );
}
