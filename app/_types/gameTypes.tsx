import { Dispatch, SetStateAction } from "react";

export interface GameContextType {
  isxNext: boolean;
  setIsxNext: Dispatch<SetStateAction<boolean>>;
  board: (null | string)[];
  setBoard: Dispatch<SetStateAction<(string | null)[]>>;
  handleClick: (index: number) => void;
  gameWinner: string;
  setGameWinner: Dispatch<SetStateAction<string>>;
  setWinningLine: Dispatch<SetStateAction<number[]>>;
  winningLine: number[];
  quitGame: () => void;
  nextRound: () => void;
  handleSoloClick: (index: number) => void;
  handleMarkSelection: (mark: "X" | "O") => void;
  multiPlayerNextRound: () => void;
  restartGame: () => void;
  makeAIMove: (board: (string | null)[]) => void;
  xWinCount: number;
  oWinCount: number;
  tieCount: number;
  tie: boolean;
  setHoveredIndex: Dispatch<SetStateAction<number | null>>;
  hoveredIndex: number | null;
  multiPlayerMode: boolean;
  setShowRestart: Dispatch<SetStateAction<boolean>>;
  showRestart: boolean;
  setMultiPlayerMode: Dispatch<SetStateAction<boolean>>;
  setSelectedMark: Dispatch<SetStateAction<string>>;
  selectedMark: string;
  setTie: Dispatch<SetStateAction<boolean>>;
  setXwinCount: Dispatch<SetStateAction<number>>;
  setOwinCount: Dispatch<SetStateAction<number>>;
  setTieCount: Dispatch<SetStateAction<number>>;
}
