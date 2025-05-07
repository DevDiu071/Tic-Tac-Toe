import React from "react";

export default function Stats() {
  return (
    <div className="flex items-center gap-x-[20px] justify-center mt-[20px]">
      <div className="bg-light-blue w-[96px] leading-5 h-[64px] p-3 rounded-[10px] flex flex-col justify-center items-center ">
        <p className="text-[14px]">X (YOU)</p>
        <p className="text-[20px] font-bold">5</p>
      </div>
      <div className="bg-silver  w-[96px] leading-5 h-[64px] p-3 rounded-[10px] flex flex-col justify-center items-center">
        <p className="text-[14px]">TIES</p>
        <p className="text-[20px] font-bold">32</p>
      </div>
      <div className="bg-light-yellow  w-[96px] leading-5 h-[64px] p-3 rounded-[10px] flex flex-col justify-center items-center">
        <p className="text-[14px]">O (CPU)</p>
        <p className="text-[20px] font-bold">8</p>
      </div>
    </div>
  );
}
