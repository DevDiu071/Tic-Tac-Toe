"use client";

import React, { useState } from "react";

export default function GameBoard() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isxNext, setIsXNext] = useState(true);
  return (
    <div className="grid grid-cols-3 max-w-[328px] mx-auto gap-[20px]">
      {board.map((square, index) => (
        <button
          className="bg-semi-dark-navy rounded-[10px] p-4 w-[96px] h-[96px] "
          key={index}
        >
          {square}
        </button>
      ))}
    </div>
  );
}
