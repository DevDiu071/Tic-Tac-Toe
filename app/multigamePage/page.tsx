import React from "react";
import GameBoard from "../_components/GameBoard";
import Header from "../_components/Header";
import Stats from "../_components/Stats";
import Overlay from "../_components/Overlay";
import MultiPlayerWinScreen from "../_components/MultiPlayerWinScreen";
import Restart from "../_components/Restart";

export default function page() {
  return (
    <div>
      <Header />
      <GameBoard />
      <Stats />
      <Restart />
      <MultiPlayerWinScreen />
      <Overlay />
    </div>
  );
}
