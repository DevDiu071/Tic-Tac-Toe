"use client";

import { useGame } from "../_context/GameContext";
import Image from "next/image";
import xImg from "@/public/images/icon-x.svg";
import oImg from "@/public/images/icon-o.svg";
import clsx from "clsx";
import { FaCircleDot } from "react-icons/fa6";

export default function GameBoard() {
  const { board, handleClick, gameWinner } = useGame();
  return (
    <div className="grid grid-cols-3 max-w-[328px] mx-auto gap-[20px]">
      {board.map((square, index) => (
        <button
          onClick={() => handleClick(index)}
          className="bg-semi-dark-navy rounded-[10px] p-4 w-[96px] h-[96px] "
          key={index}
        >
          {square === "X" ? (
            <div className="flex items-center justify-center">
              <Image src={xImg} alt="icon x" className="w-[40px] h-[40px]" />
            </div>
          ) : square === "O" ? (
            <div
              className={clsx("flex items-center justify-center", {
                "bg-light-yellow": gameWinner === "O",
              })}
            >
              {!gameWinner && (
                <Image src={oImg} alt="icon o" className="w-[40px] h-[40px]" />
              )}
              {gameWinner === "O" && <FaCircleDot className="text-[31px]" />}
            </div>
          ) : null}
        </button>
      ))}
    </div>
  );
}
