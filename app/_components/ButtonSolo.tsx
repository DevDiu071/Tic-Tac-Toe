"use client";
import { motion } from "framer-motion";

import Link from "next/link";
import React from "react";
import { useGame } from "../_context/GameContext";

export default function ButtonSolo() {
  const { selectedMark, makeAIMove, setIsxNext, setMultiPlayerMode } =
    useGame();

  const handleClick = () => {
    if (selectedMark === "O") {
      makeAIMove(Array(9).fill(null)); // AI makes the first move if O is selected
      setIsxNext(false);
      setMultiPlayerMode(false);
    }
    setMultiPlayerMode(false);
  };
  // Add any additional logic needed when the button is clicked
  return (
    <Link href="/sologamePage">
      <motion.div
        whileHover={{
          backgroundColor: "#ffc860",
          transition: { duration: 0.2 },
        }}
        onClick={handleClick}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        className="bg-light-yellow cursor-pointer pt-[14px] md:text-[20px] pb-[22px] mt-[32px] font-bold w-full shadow-btn rounded-[15px]"
      >
        NEW GAME (VS CPU)
      </motion.div>
    </Link>
  );
}
