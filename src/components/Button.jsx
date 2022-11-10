import React from "react";
import { useState } from "react";

const Button = ({ num, name, color }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prevState) => !prevState);
    console.log(active, color);
  };

  return (
    <>
      <button
        className={`flex w-full h-[48px] justify-start items-center border border-[#FFFFFF]/20 mb-[16px] hover:bg-[#38384F] hover:border-[#38384F] transition duration-200 bg-[${
          active ? `bg-[${color}] border-[${color}]` : "bg-[#070724]"
        }]`}
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
