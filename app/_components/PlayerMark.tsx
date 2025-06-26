"use client";
import { motion } from "framer-motion";

import React from "react";
import { FaCircleDot } from "react-icons/fa6";
import clsx from "clsx";
import { useGame } from "../_context/GameContext";

export default function PlayerMark() {
  const { selectedMark, handleMarkSelection } = useGame();
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className="bg-semi-dark-navy mt-[32px] shad pt-[24px] rounded-[15px]"
    >
      <h1 className="text-silver font-bold text-[16px] text-center">
        PICK PLAYER 1&apos;S MARK
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 px-2 gap-x-3 items-center mt-[24px] mb-[17px] h-[72px] rounded-[10px] bg-dark-navy w-[279px] md:mx-[24px] md:w-[412px]">
          <button
            type="button"
            aria-label="Select X mark"
            className={clsx(
              "flex p-3 cursor-pointer transition-colors duration-200 rounded-[10px] items-center justify-center",
              {
                "bg-silver": selectedMark === "X",
                "hover:bg-semi-dark-navy": selectedMark !== "X",
              }
            )}
            onClick={() => handleMarkSelection("X")}
          >
            <svg
              className="w-[31px] h-[31px]"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.12 1.269c.511 0 1.023.195 1.414.586l9.611 9.611c.391.391.586.903.586 1.415s-.195 1.023-.586 1.414L44.441 32l17.704 17.705c.391.39.586.902.586 1.414 0 .512-.195 1.024-.586 1.415l-9.611 9.611c-.391.391-.903.586-1.415.586a1.994 1.994 0 0 1-1.414-.586L32 44.441 14.295 62.145c-.39.391-.902.586-1.414.586a1.994 1.994 0 0 1-1.415-.586l-9.611-9.611a1.994 1.994 0 0 1-.586-1.415c0-.512.195-1.023.586-1.414L19.559 32 1.855 14.295a1.994 1.994 0 0 1-.586-1.414c0-.512.195-1.024.586-1.415l9.611-9.611c.391-.391.903-.586 1.415-.586s1.023.195 1.414.586L32 19.559 49.705 1.855c.39-.391.902-.586 1.414-.586Z"
                className={clsx("", {
                  "fill-grey": selectedMark && selectedMark === "X",
                  "fill-silver": selectedMark && selectedMark !== "X",
                })}
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Select O mark"
            onClick={() => handleMarkSelection("O")}
            className={clsx(
              "p-3 cursor-pointer transition-colors duration-200 rounded-[10px] flex justify-center",
              {
                "bg-silver text-grey": selectedMark === "O",
                "hover:bg-semi-dark-navy": selectedMark !== "O",
              }
            )}
          >
            <FaCircleDot
              className={clsx("text-[31px]", {
                "text-silver": selectedMark !== "O",
              })}
            />
          </button>
        </div>
      </div>
      <p className="text-[14px] font-semibold pb-[30px] text-silver text-center">
        REMEMBER: X GOES FIRST
      </p>
    </motion.div>
  );
}
