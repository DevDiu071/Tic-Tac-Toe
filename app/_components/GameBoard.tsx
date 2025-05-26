"use client";

import { useGame } from "../_context/GameContext";
import Image from "next/image";
import xImg from "@/public/images/icon-x.svg";
import oImg from "@/public/images/icon-o.svg";
import clsx from "clsx";
import { FaCircleDot } from "react-icons/fa6";

export default function GameBoard() {
  const { board, handleClick, winningLine, gameWinner } = useGame();
  console.log(board);
  return (
    <div className="grid grid-cols-3 max-w-[328px] mx-auto gap-[20px]">
      {board.map((square, index) => (
        <button
          onClick={() => handleClick(index)}
          className={clsx(
            "rounded-[10px] p-4 w-[96px] h-[96px]",
            winningLine.includes(index)
              ? gameWinner === "O"
                ? "bg-light-yellow"
                : "bg-light-blue"
              : "bg-semi-dark-navy"
          )}
          key={index}
        >
          {square === "X" ? (
            <div className="flex items-center justify-center">
              <Image src={xImg} alt="icon x" className="w-[40px] h-[40px]" />
            </div>
          ) : square === "O" ? (
            <div className={clsx("flex items-center justify-center", {})}>
              {gameWinner !== "O" ? (
                <Image src={oImg} alt="icon o" className="w-[40px] h-[40px]" />
              ) : gameWinner === "O" ? (
                <FaCircleDot className="text-[31px]" />
              ) : null}

              {/* {gameWinner === "O" && <FaCircleDot className="text-[31px]" />} */}
            </div>
          ) : null}
        </button>
      ))}
    </div>
  );
}
