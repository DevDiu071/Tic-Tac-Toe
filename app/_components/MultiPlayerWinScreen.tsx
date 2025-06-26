"use client";
import { motion } from "framer-motion";

import React from "react";
import xImg from "@/public/images/icon-x.svg";
import Image from "next/image";
import { useGame } from "../_context/GameContext";
import oImg from "@/public/images/icon-o.svg";

export default function MultiPlayerWinScreen() {
  const {
    gameWinner,
    selectedMark,
    multiPlayerMode,
    multiPlayerNextRound,
    quitGame,
    tie,
  } = useGame();
  return gameWinner || tie ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      className="absolute z-30 pb-[40px] h-[228px] sm:h-[266px] flex flex-col justify-center w-full top-[220px] bottom-[220px] bg-semi-dark-navy transform"
    >
      <div className="flex flex-col justify-center items-center">
        {!tie && gameWinner === selectedMark && multiPlayerMode && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.4 } }}
            className="mt-[40px] mb-[16px] font-bold text-silver"
          >
            PLAYER 1 WIN!
          </motion.p>
        )}
        {!tie && gameWinner !== selectedMark && multiPlayerMode && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.4 } }}
            className="mt-[40px] mb-[16px] font-bold text-silver"
          >
            PLAYER 2 WINS!
          </motion.p>
        )}
        {tie && multiPlayerMode && (
          <p className="font-bold text-silver mt-[50px] mb-[24px] text-[24px]">
            ROUND TIED
          </p>
        )}
        {!tie && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.4 },
            }}
            className="flex items-center gap-x-[9px] mb-[24px]"
          >
            {gameWinner === "X" ? (
              <Image src={xImg} alt="icon x" className="w-[28px] h-[28px]" />
            ) : (
              <Image src={oImg} alt="icon x" className="w-[28px] h-[28px]" />
            )}
            <p className="text-light-blue font-bold text-[24px]">
              TAKES THE ROUND
            </p>
          </motion.div>
        )}
        <div className="flex items-center gap-x-[16px]">
          <motion.button
            type="button"
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.3, ease: "easeIn", delay: 0.4 },
            }}
            whileHover={{
              backgroundColor: "#DBE8ED",
              transition: { duration: 0.2 },
            }}
            onClick={quitGame}
            className="text-[16px] cursor-pointer font-bold h-[56px] w-[76px] rounded-[10px] bg-silver"
          >
            QUIT
          </motion.button>
          <motion.button
            type="button"
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.3, ease: "easeIn", delay: 0.4 },
            }}
            whileHover={{
              backgroundColor: "#ffc860",
              transition: { duration: 0.2 },
            }}
            onClick={multiPlayerNextRound}
            className="text-[16px] cursor-pointer h-[56px] w-[146px] bg-light-yellow font-bold px-[17px] rounded-[10px]"
          >
            NEXT ROUND
          </motion.button>
        </div>
      </div>
    </motion.div>
  ) : null;
}
