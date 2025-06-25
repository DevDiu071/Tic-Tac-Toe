"use client";

import { useGame } from "../_context/GameContext";
import Image from "next/image";
import xImg from "@/public/images/icon-x.svg";
import oImg from "@/public/images/icon-o.svg";
import xOutline from "@/public/images/icon-x-outline.svg";
import oOutline from "@/public/images/icon-o-outline.svg";
import clsx from "clsx";
import { FaCircleDot } from "react-icons/fa6";

export default function GameBoard() {
  const {
    board,
    handleClick,
    hoveredIndex,
    setHoveredIndex,
    winningLine,

    gameWinner,
  } = useGame();

  return (
    <div className="grid grid-cols-3 max-w-[328px] md:max-w-[460px]  mt-[64px] mx-auto gap-[20px]">
      {board.map((square, index) => (
        <button
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleClick(index)}
          className={clsx(
            "rounded-[10px] shad cursor-pointer md:w-[140px] md:h-[140px] p-4 w-[96px] h-[96px]",
            winningLine.includes(index)
              ? gameWinner === "O"
                ? "bg-light-yellow shadow-btn"
                : "bg-light-blue shadow-multi-btn"
              : "bg-semi-dark-navy"
          )}
          key={index}
        >
          {square === "X" ? (
            <div className="flex items-center justify-center">
              {hoveredIndex === index ? (
                <Image
                  src={xOutline}
                  alt="icon x"
                  className="w-[40px] transition h-[40px] md:w-[64px] md:h-[64px]"
                />
              ) : gameWinner === "X" && winningLine.includes(index) ? (
                <svg
                  className="w-[31px] h-[31px] md:w-[64px] md:h-[64px] "
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M51.12 1.269c.511 0 1.023.195 1.414.586l9.611 9.611c.391.391.586.903.586 1.415s-.195 1.023-.586 1.414L44.441 32l17.704 17.705c.391.39.586.902.586 1.414 0 .512-.195 1.024-.586 1.415l-9.611 9.611c-.391.391-.903.586-1.415.586a1.994 1.994 0 0 1-1.414-.586L32 44.441 14.295 62.145c-.39.391-.902.586-1.414.586a1.994 1.994 0 0 1-1.415-.586l-9.611-9.611a1.994 1.994 0 0 1-.586-1.415c0-.512.195-1.023.586-1.414L19.559 32 1.855 14.295a1.994 1.994 0 0 1-.586-1.414c0-.512.195-1.024.586-1.415l9.611-9.611c.391-.391.903-.586 1.415-.586s1.023.195 1.414.586L32 19.559 49.705 1.855c.39-.391.902-.586 1.414-.586Z"
                    className={clsx("", {
                      "fill-grey": gameWinner === "X",
                      "fill-silver": gameWinner !== "X",
                    })}
                  />
                </svg>
              ) : (
                <Image
                  src={xImg}
                  alt="icon x"
                  className="w-[40px] transition h-[40px] md:w-[64px] md:h-[64px]"
                />
              )}
            </div>
          ) : square === "O" ? (
            <div className={clsx("flex items-center justify-center", {})}>
              {gameWinner === "O" && winningLine.includes(index) ? (
                <FaCircleDot className="text-[31px] transition text-grey md:text-[64px]" />
              ) : hoveredIndex === index ? (
                <Image
                  src={oOutline}
                  alt="icon x"
                  className="w-[40px] transition h-[40px] md:w-[64px] md:h-[64px]"
                />
              ) : (
                <Image
                  src={oImg}
                  alt="icon o"
                  className="w-[40px] transition h-[40px] md:w-[64px] md:h-[64px]"
                />
              )}

              {/* {gameWinner === "O" && <FaCircleDot className="text-[31px]" />} */}
            </div>
          ) : null}
        </button>
      ))}
    </div>
  );
}
