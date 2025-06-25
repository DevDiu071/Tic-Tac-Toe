"use client";
import { motion } from "framer-motion";

import React from "react";
import Image from "next/image";
import xImg from "@/public/images/icon-x.svg";
import oImg from "@/public/images/icon-o.svg";
import restartImg from "@/public/images/icon-restart.svg";
import { useGame } from "../_context/GameContext";

export default function Header() {
  const { isxNext, setShowRestart } = useGame();
  return (
    <div className="flex items-center justify-center sm:justify-between gap-x-[60px] max-w-[460px] sm:mx-auto mx-auto md:mt-[139px] md:mb-[20px] mt-[24px]">
      <div className="flex justify-center gap-x-3 items-center">
        <Image src={xImg} alt="icon x" className="w-[32px] h-[32px]" />
        <Image src={oImg} alt="icon o" className="w-[31px] h-[31px]" />
      </div>
      <div className="gap-x-[9px] shadow-md flex justify-center md:gap-x-[13px] w-[100px] items-center rounded-[5px] md:rounded-[10px] md:w-[130px] md:h-[52px] bg-semi-dark-navy px-[15px] pt-[9px] pb-[13px]">
        {isxNext ? (
          <motion.div
            key="x"
            initial={{ scale: 0 }}
            animate={{ scale: [0.5, 1.7, 1] }}
            transition={{ duration: 0.3, times: [0, 0.5, 1] }}
          >
            <Image
              src={xImg}
              alt="icon x"
              className="w-[16px] h-[16px] md:w-[22px] md:h-[22px] "
            />
          </motion.div>
        ) : (
          <motion.div
            key="o"
            initial={{ scale: 0 }}
            animate={{ scale: [0.5, 1.7, 1] }}
            transition={{ duration: 0.3, times: [0, 0.5, 1] }}
          >
            <Image
              src={oImg}
              alt="icon x"
              className="w-[16px] h-[16px] md:w-[22px] md:h-[22px]"
            />
          </motion.div>
        )}
        <p className="text-silver text-[14px] font-bold">TURN</p>
      </div>

      <div
        onClick={() => {
          setShowRestart(true);
        }}
        className="bg-silver flex justify-center items-center cursor-pointer p-[5px] w-[40px] h-[40px] md:w-[52px] md:h-[52px] rounded-[10px] restart-shadow "
      >
        <Image
          src={restartImg}
          alt="icon resart"
          className="w-[15px] h-[15px] md:w-[20px] md:h-[20px]"
        />
      </div>
    </div>
  );
}
