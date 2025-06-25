"use client";
import { motion } from "framer-motion";

import React from "react";
import { useGame } from "../_context/GameContext";

export default function Restart() {
  const { setShowRestart, showRestart, restartGame } = useGame();
  return showRestart ? (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className="absolute z-30 pb-[40px] sm:h-[266px] flex flex-col justify-center h-[228px] w-full top-[220px] bottom-[220px] bg-semi-dark-navy transform"
    >
      <div className="flex flex-col justify-center items-center">
        <p className="mt-[40px] text-[24px] mb-[16px] font-bold text-silver">
          RESTART GAME?
        </p>

        <div className="flex items-center gap-x-[16px]">
          <motion.button
            whileHover={{
              backgroundColor: "#DBE8ED",
              transition: { duration: 0.2 },
            }}
            onClick={() => setShowRestart(false)}
            className="text-[16px] cursor-pointer font-bold h-[56px] restart-shadow w-[146px] rounded-[10px] bg-silver"
          >
            NO, CANCEL
          </motion.button>
          <motion.button
            whileHover={{
              backgroundColor: "#ffc860",
              transition: { duration: 0.2 },
            }}
            onClick={restartGame}
            className="text-[16px] cursor-pointer shadow-restart h-[56px] w-[146px] bg-light-yellow font-bold px-[17px] rounded-[10px]"
          >
            YES, RESTART
          </motion.button>
        </div>
      </div>
    </motion.div>
  ) : null;
}
