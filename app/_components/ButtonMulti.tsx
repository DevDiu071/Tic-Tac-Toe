"use client";
import { motion } from "framer-motion";

import Link from "next/link";
import React from "react";
import { useGame } from "../_context/GameContext";

export default function ButtonMulti() {
  const { setMultiPlayerMode } = useGame();
  return (
    <Link href="/multigamePage">
      <motion.button
        whileHover={{
          backgroundColor: "#65E9E4",
          transition: { duration: 0.2 },
        }}
        onClick={() => setMultiPlayerMode(true)}
        className="bg-light-blue cursor-pointer md:text-[20px] shadow-multi-btn pt-[14px] pb-[22px] mt-[16px] mb-[141px] font-bold w-full shadow-btn rounded-[15px]"
      >
        NEW GAME (VS PLAYER)
      </motion.button>
    </Link>
  );
}
