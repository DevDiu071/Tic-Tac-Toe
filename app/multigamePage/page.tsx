import React from "react";
import GameBoard from "../_components/GameBoard";
import Header from "../_components/Header";
import Stats from "../_components/Stats";
import WinScreen from "../_components/WinScreen";
import Overlay from "../_components/Overlay";

export default function page() {
  return (
    <div>
      <Header />
      <GameBoard />
      <Stats />
      <WinScreen />
      <Overlay />
    </div>
  );
}
