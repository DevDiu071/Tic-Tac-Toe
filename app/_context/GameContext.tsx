"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { GameContextType } from "../_types/gameTypes";

const GameContext = createContext<GameContextType | undefined>(undefined);

function GameProvider({ children }: { children: ReactNode }) {
  const [board, setBoard] = useState<(null | string)[]>(Array(9).fill(null));
  const [isxNext, setIsxNext] = useState<boolean>(true);
  const [gameWinner, setGameWinner] = useState<string>("");

  const handleClick = (index: number) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isxNext ? "X" : "O";
    setBoard(newBoard);
    if (!calculateWinner(newBoard)) {
      setIsxNext(!isxNext);
    }
  };

  const calculateWinner = (board: (null | string)[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setGameWinner(board[a]);
        return board[a];
      }
    }
    return null;
  };

  // check winner
  const winner = calculateWinner(board);
  console.log("test winner: ", winner);
  if (winner) console.log(`Player ${winner} won the Game`);

  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        isxNext,
        setIsxNext,
        handleClick,
        gameWinner,
        setGameWinner,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("Context was used outside provider");
  }
  return context;
}

export { GameProvider, useGame };
