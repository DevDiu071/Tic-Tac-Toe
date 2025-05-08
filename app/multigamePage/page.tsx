import React from "react";
import GameBoard from "../_components/GameBoard";
import Header from "../_components/Header";
import Stats from "../_components/Stats";

export default function page() {
  return (
    <div>
      <Header />
      <GameBoard />
      <Stats />
    </div>
  );
}
