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
  const [selectedMark, setSelectedMark] = useState<string>("X");

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

  ///////////// AI LOGIC

  // Check if board is full (for Minimax)
  const isBoardFull = (board: (string | null)[]) => {
    return board.every((cell) => cell !== null);
  };

  // Minimax algorithm
  const minimax = (
    board: (string | null)[],
    depth: number,
    isMaximizing: boolean
  ) => {
    const winner = calculateWinner(board).winner;

    // Terminal conditions
    if (winner === "X") return -10 + depth; // AI loses
    if (winner === "O") return 10 - depth; // AI wins
    if (isBoardFull(board)) return 0; // Draw

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          board[i] = "O"; // AI is "O"
          const score = minimax(board, depth + 1, false);
          board[i] = null; // Undo move
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          board[i] = "X"; // Player is "X"
          const score = minimax(board, depth + 1, true);
          board[i] = null; // Undo move
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  // AI makes the best move using Minimax
  const makeAIMove = (currentBoard: (string | null)[]) => {
    let bestScore = -Infinity;
    let bestMove = -1;

    for (let i = 0; i < currentBoard.length; i++) {
      if (!currentBoard[i]) {
        currentBoard[i] = "O"; // AI is "O"
        const score = minimax(currentBoard, 0, false);
        currentBoard[i] = null; // Undo move
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }

    if (bestMove !== -1) {
      const newBoard = [...currentBoard];
      newBoard[bestMove] = "O";
      setBoard(newBoard);
      // Check if AI won
      const winner = calculateWinner(newBoard).winner;
      if (winner) setGameWinner(winner);
    }
  };

  const handleSoloClick = (index: number) => {
    // If cell is occupied or game is over, do nothing
    if (board[index] || calculateWinner(board).winner) return;

    // Player makes a move
    const newBoard = [...board];
    newBoard[index] = isxNext ? "X" : "O"; // Assume player is "X"
    setBoard(newBoard);

    // Check if player won
    const winner = calculateWinner(newBoard).winner;
    if (winner) {
      setGameWinner(winner);
      return;
    }

    // If no winner, trigger AI move (assuming AI is "O")
    if (!winner) {
      setTimeout(() => makeAIMove(newBoard), 500); // Delay for UX
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
        selectedMark,
        setSelectedMark,
        winningLine,
        setWinningLine,
        handleSoloClick,
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
