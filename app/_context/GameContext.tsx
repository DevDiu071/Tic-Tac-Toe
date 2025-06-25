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
  const [multiPlayerMode, setMultiPlayerMode] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showRestart, setShowRestart] = useState<boolean>(false);

  const router = useRouter();

  useEffect(
    function () {
      const { winner, line } = calculateWinner(board);

      if (winner) {
        setGameWinner(winner);
        setWinningLine(line);
      }
      const filteredBoards = board.filter((board) => board !== null);
      if (filteredBoards.length === 9 && !winner) {
        setTie(true);
      }
    },
    [board] // Recalculate winner when board changes or gameWinner updates
  );

  // When player selects O, AI (X) makes the first move
  useEffect(() => {
    if (
      selectedMark === "O" &&
      board.every((cell) => cell === null) &&
      !gameWinner &&
      !multiPlayerMode
    ) {
      setTimeout(() => makeAIMove([...board]), 500);
    }
  }, [selectedMark, board, gameWinner, multiPlayerMode]); // Trigger when selectedMark changes or board resets

  const handleClick = (index: number) => {
    if (board[index] || calculateWinner(board).winner) return;

    const newBoard = [...board];
    newBoard[index] = isxNext ? "X" : "O";
    setBoard(newBoard);
    if (!gameWinner) {
      setIsxNext(!isxNext);
    }
  };

  const handleMarkSelection = (mark: "X" | "O") => {
    setSelectedMark(mark);
    setBoard(Array(9).fill(null)); // Reset board
    setGameWinner(""); // Clear winner
    setIsxNext(true); // Ensure X goes first
    setMultiPlayerMode(true);
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
    isMaximizing: boolean,
    aiMark: string
  ) => {
    const winner = calculateWinner(board).winner;
    const humanMark = aiMark === "X" ? "O" : "X";

    // Terminal conditions
    if (winner === humanMark) return -10 + depth; // AI loses
    if (winner === aiMark) return 10 - depth; // AI wins
    if (isBoardFull(board)) return 0; // Draw

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          board[i] = aiMark;
          const score = minimax(board, depth + 1, false, aiMark);
          board[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          board[i] = humanMark;
          const score = minimax(board, depth + 1, true, aiMark);
          board[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  // AI makes the best move using Minimax
  const makeAIMove = (currentBoard: (string | null)[]) => {
    const aiMark = selectedMark === "X" ? "O" : "X"; // AI is opposite of player
    let bestScore = -Infinity;
    let bestMove = -1;

    for (let i = 0; i < currentBoard.length; i++) {
      if (!currentBoard[i]) {
        currentBoard[i] = aiMark;
        const score = minimax(currentBoard, 0, false, aiMark);
        currentBoard[i] = null;
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }

    if (bestMove !== -1) {
      const newBoard = [...currentBoard];
      newBoard[bestMove] = aiMark;
      setBoard(newBoard);
      const winner = calculateWinner(newBoard).winner;
      if (winner) {
        setGameWinner(winner);
      } else {
        setIsxNext((next) => !next); // Switch turn back to player
      }
    }
  };

  const handleSoloClick = (index: number) => {
    // If in multiplayer mode, do nothing (or handle differently)
    if (multiPlayerMode) return;

    // If cell is occupied or game is over, do nothing
    if (board[index] || gameWinner) return;

    // Player makes a move
    const newBoard = [...board];
    newBoard[index] = selectedMark;
    setBoard(newBoard);

    // Check if player won
    const { winner, line } = calculateWinner(newBoard);
    // const { winner, line } = calculateWinner(board);
    if (winner) {
      setGameWinner(winner);
      setWinningLine(line);

      return;
    }

    if (!gameWinner) {
      setIsxNext(!isxNext);
    }

    // If no winner and game isn't over, trigger AI move
    if (!isBoardFull(newBoard)) {
      setTimeout(() => makeAIMove(newBoard), 500);
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
    setMultiPlayerMode(false);
    setSelectedMark("X"); // Reset selected mark to default
  };

  const nextRound = () => {
    // Update scores
    if (gameWinner === "O") setOwinCount((count) => count + 1);
    else if (gameWinner === "X") setXwinCount((count) => count + 1);
    else setTieCount((tie) => tie + 1);

    // Reset game state
    setBoard(Array(9).fill(null));
    setGameWinner("");
    setTie(false);
    setWinningLine([]);
    setIsxNext(true); // Reset to X's turn

    // If in solo mode and player is "O", AI ("X") makes the first move
    if (!multiPlayerMode && selectedMark === "O") {
      setTimeout(() => makeAIMove(Array(9).fill(null)), 500);
    }
  };

  const multiPlayerNextRound = () => {
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
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setGameWinner("");
    setIsxNext(true);
    setTie(false);
    setXwinCount(0);
    setOwinCount(0);
    setTieCount(0);
    setWinningLine([]);
    setShowRestart(false);
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
        handleMarkSelection,
        multiPlayerMode,
        setMultiPlayerMode,
        hoveredIndex,
        setHoveredIndex,
        multiPlayerNextRound,
        setShowRestart,
        showRestart,
        restartGame,
        makeAIMove,
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
