import Link from "next/link";
import React from "react";

export default function ButtonMulti() {
  return (
    <Link href="/multigamePage">
      <button className="bg-light-blue cursor-pointer shadow-multi-btn pt-[14px] pb-[22px] mt-[16px] mb-[141px] font-bold w-full shadow-btn rounded-[15px]">
        NEW GAME (VS PLAYER)
      </button>
    </Link>
  );
}
