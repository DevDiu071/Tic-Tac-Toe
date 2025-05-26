"use client";

import Link from "next/link";
import React from "react";
import { useGame } from "../_context/GameContext";

export default function ButtonMulti() {
  const { setMultiPlayerMode } = useGame();
  return (
    <Link href="/multigamePage">
      <button
        onClick={() => setMultiPlayerMode(true)}
        className="bg-light-blue cursor-pointer shadow-multi-btn pt-[14px] pb-[22px] mt-[16px] mb-[141px] font-bold w-full shadow-btn rounded-[15px]"
      >
        NEW GAME (VS PLAYER)
      </button>
    </Link>
  );
}
