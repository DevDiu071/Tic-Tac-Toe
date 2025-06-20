"use client";

import { useGame } from "../_context/GameContext";
import Image from "next/image";
import xImg from "@/public/images/icon-x.svg";
import xOutline from "@/public/images/icon-x-outline.svg";
import oOutline from "@/public/images/icon-o-outline.svg";
import oImg from "@/public/images/icon-o.svg";
import clsx from "clsx";
import { FaCircleDot } from "react-icons/fa6";

export default function SoloGameBoard() {
  const {
    board,
    setHoveredIndex,
    hoveredIndex,
    handleSoloClick,
    winningLine,
    gameWinner,
  } = useGame();
  console.log(board);
  return (
    <div className="grid grid-cols-3 max-w-[328px] md:max-w-[460px] mx-auto gap-[20px]">
      {board.map((square, index) => (
        <button
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleSoloClick(index)}
          className={clsx(
            " rounded-[10px] shad cursor-pointer p-4 w-[96px] h-[96px] md:w-[140px] md:h-[140px] ",
            {
              "bg-light-yellow":
                gameWinner === "O" && winningLine.includes(index),
              "bg-light-blue":
                gameWinner === "X" && winningLine.includes(index),
              "bg-semi-dark-navy": !winningLine.includes(index),
            }
          )}
          key={index}
        >
          {square === "X" ? (
            <div className="flex items-center justify-center">
              {hoveredIndex !== index ? (
                <Image
                  src={xImg}
                  alt="icon x"
                  className="w-[40px] h-[40px] md:w-[64px] md:h-[64px] "
                />
              ) : (
                <Image
                  src={xOutline}
                  alt="icon x"
                  className="w-[40px] h-[40px] md:w-[64px] md:h-[64px] "
                />
              )}
            </div>
          ) : square === "O" ? (
            <div className={clsx("flex items-center justify-center", {})}>
              {gameWinner !== "O" && hoveredIndex !== index ? (
                <Image
                  src={oImg}
                  alt="icon o"
                  className="w-[40px] h-[40px] md:w-[64px] md:h-[64px] "
                />
              ) : gameWinner === "O" && hoveredIndex !== index ? (
                <FaCircleDot className="text-[31px]" />
              ) : (
                <Image
                  src={oOutline}
                  alt="icon x"
                  className="w-[40px] h-[40px] md:w-[64px] md:h-[64px] "
                />
              )}
              {/* {hoveredIndex === index && (
                <Image
                  src={oOutline}
                  alt="icon x"
                  className="w-[40px] h-[40px]"
                />
              )} */}

              {/* {gameWinner === "O" && <FaCircleDot className="text-[31px]" />} */}
            </div>
          ) : null}
        </button>
      ))}
    </div>
  );
}
