"use client";

import React from "react";
import { useGame } from "../_context/GameContext";

export default function Overlay() {
  const { gameWinner, tie, showRestart } = useGame();
  return gameWinner || tie || showRestart ? (
    <div className="h-full w-full bg-overlay-bg absolute top-0 left-0"></div>
  ) : null;
}
