import React from "react";
import { useState } from "react";

const Button = ({ num, name, color }) => {
  return (
    <>
      <button
        className="flex w-full h-[48px] justify-start items-center border border-[#FFFFFF]/20 mb-[16px]"
        onClick={handleClick}
      >
        <p className="uppercase font-spartan font-bold text-[12px] text-[#FFFFFF]/50 leading-[25px] tracking-[2.5px] ml-6">
          {num}
        </p>
        <p className="uppercase font-spartan font-bold text-[12px] text-[#FFFFFF] leading-[25px] tracking-[2.5px] ml-6">
          {name}
        </p>
      </button>
    </>
  );
};

export default Button;
