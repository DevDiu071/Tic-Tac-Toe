import React from "react";
import Image from "next/image";
import xImg from "@/public/images/icon-x.svg";
import { FaCircleDot } from "react-icons/fa6";

export default function PlayerMark() {
  return (
    <div className="bg-semi-dark-navy mt-[32px] shad pt-[24px] rounded-[15px]">
      <h1 className="text-silver font-bold text-[16px] text-center">
        PICK PLAYER 1&apos;S MARK
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-x-3 items-center mt-[24px] mb-[17px] h-[72px] rounded-[10px] bg-dark-navy w-[279px]">
          <div className="flex justify-center">
            <Image src={xImg} alt="icon x" className="w-[32px] svg h-[32px]" />
          </div>
          <div className="bg-silver p-2.5 rounded-[10px] flex justify-center">
            <FaCircleDot className="text-[31px]" />
          </div>
        </div>
      </div>
      <p className="text-[14px] font-semibold pb-[30px] text-silver text-center">
        REMEMBER: X GOES FIRST
      </p>
    </div>
  );
}
