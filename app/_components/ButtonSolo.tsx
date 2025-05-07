import Link from "next/link";
import React from "react";

export default function ButtonSolo() {
  return (
    <Link href="/sologamePage">
      <button className="bg-light-yellow cursor-pointer pt-[14px] pb-[22px] mt-[32px] font-bold w-full shadow-btn rounded-[15px]">
        NEW GAME (VS CPU)
      </button>
    </Link>
  );
}
