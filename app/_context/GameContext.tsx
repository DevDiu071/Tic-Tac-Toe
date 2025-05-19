"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { GameContextType } from "../_types/gameTypes";
import { useRouter } from "next/navigation";

const GameContext = createContext<GameContextType | undefined>(undefined);

function GameProvider({ children }: { children: ReactNode }) {
  const [board, setBoard] = useState<(null | string)[]>(Array(9).fill(null));
  const [isxNext, setIsxNext] = useState<boolean>(true);
  const [gameWinner, setGameWinner] = useState<string>("");
  const [xWinCount, setXwinCount] = useState<number>(0);
  const [oWinCount, setOwinCount] = useState<number>(0);
  const [tieCount, setTieCount] = useState<number>(0);
  const [tie, setTie] = useState<boolean>(false);
  const [winningLine, setWinningLine] = useState<number[]>([]);

  const router = useRouter();

  useEffect(
    function () {
      const { winner, line } = calculateWinner(board);
      console.log("test winner: ", winner);
      if (winner && winner !== gameWinner) {
        setGameWinner(winner);
        setWinningLine(line);
        console.log(board);
      }
      const filteredBoards = board.filter((board) => board !== null);
      if (filteredBoards.length === 9 && !winner) {
        setTie(true);
      }
    },
    [board]
  );

  const handleClick = (index: number) => {
    if (board[index] || calculateWinner(board).winner) return;

    const newBoard = [...board];
    newBoard[index] = isxNext ? "X" : "O";
    setBoard(newBoard);
    if (!gameWinner) {
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
        return { winner: board[a], line };
      }
    }
    return { winner: null, line: [] };
  };

  const quitGame = () => {
    setBoard(Array(9).fill(null));
    setGameWinner("");
    setIsxNext(true);
    setTie(false);
    setXwinCount(0);
    setOwinCount(0);
    setTieCount(0);
    router.push("/");
    setWinningLine([]);
    console.log("Checking board Quit: ", board);
  };

  const nextRound = () => {
    if (gameWinner === "O") {
      setOwinCount((count) => count + 1);
    } else if (gameWinner === "X") {
      setXwinCount((count) => count + 1);
    } else {
      setTieCount((tie) => tie + 1);
    }
    setBoard(Array(9).fill(null));
    setGameWinner("");
    setIsxNext(true);
    setTie(false);
    setWinningLine([]);
    console.log("Checking board Nextround: ", board);
  };

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
        quitGame,
        xWinCount,
        setXwinCount,
        oWinCount,
        setOwinCount,
        tieCount,
        setTieCount,
        nextRound,
        tie,
        setTie,
        winningLine,
        setWinningLine,
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
