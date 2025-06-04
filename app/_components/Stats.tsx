"use client";

import React from "react";
import { useGame } from "../_context/GameContext";

export default function Stats() {
  const { xWinCount, oWinCount, selectedMark, tieCount } = useGame();
  return (
    <div className="flex items-center gap-x-[20px] md:mb-[138px] justify-center mt-[20px]">
      <div className="bg-light-blue w-[96px] md:w-[140px] md:h-[72px] leading-5 h-[64px] p-3 rounded-[10px] flex flex-col justify-center items-center ">
        <p className="text-[14px]">X ({selectedMark === "X" ? "P1" : "P2"})</p>
        <p className="text-[20px] font-bold md:text-[24px]">{xWinCount}</p>
      </div>
      <div className="bg-silver  md:w-[140px] md:h-[72px]  w-[96px] leading-5 h-[64px] p-3 rounded-[10px] flex flex-col justify-center items-center">
        <p className="text-[14px]">TIES</p>
        <p className="text-[20px] md:text-[24px] font-bold">{tieCount}</p>
      </div>
      <div className="bg-light-yellow md:w-[140px] md:h-[72px] w-[96px] leading-5 h-[64px] p-3 rounded-[10px] flex flex-col justify-center items-center">
        <p className="text-[14px]">O ({selectedMark === "O" ? "P1" : "P2"})</p>
        <p className="text-[20px] font-bold  md:text-[24px]">{oWinCount}</p>
      </div>
    </div>
  );
}
