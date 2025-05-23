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
  xWinCount: number;
  oWinCount: number;
  tieCount: number;
  tie: boolean;
  setSelectedMark: Dispatch<SetStateAction<string>>;
  selectedMark: string;
  setTie: Dispatch<SetStateAction<boolean>>;
  setXwinCount: Dispatch<SetStateAction<number>>;
  setOwinCount: Dispatch<SetStateAction<number>>;
  setTieCount: Dispatch<SetStateAction<number>>;
}
