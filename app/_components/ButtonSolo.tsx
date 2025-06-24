"use client";
import { motion } from "framer-motion";

import Link from "next/link";
import React from "react";

export default function ButtonSolo() {
  return (
    <Link href="/sologamePage">
      <motion.button
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        className="bg-light-yellow cursor-pointer pt-[14px] md:text-[20px] pb-[22px] mt-[32px] font-bold w-full shadow-btn rounded-[15px]"
      >
        NEW GAME (VS CPU)
      </motion.button>
    </Link>
  );
}
