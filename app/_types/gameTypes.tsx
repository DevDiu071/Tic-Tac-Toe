import { Dispatch, SetStateAction } from "react";

export interface GameContextType {
  isxNext: boolean;
  setIsxNext: Dispatch<SetStateAction<boolean>>;
  board: (null | string)[];
  setBoard: Dispatch<SetStateAction<(string | null)[]>>;
  handleClick: (index: number) => void;
  gameWinner: string;
  setGameWinner: Dispatch<SetStateAction<string>>;
}
