import React from "react";
import { useState } from "react";

const Button = ({ num, name, color, link }) => {
  const [active, setActive] = useState(false);

  // TODO: only one button should be active at a time
  // add flex div to contain planet & info

  const handleClick = () => {
    // set state to active, remove active state from other buttons, change button color
    setActive((prevState) => !prevState);
  };

  return (
    <div
      id={num}
      onClick={handleClick}
      className={`${
        active
          ? `bg-[${color}] border-[${color}]/50`
          : "bg-inherit hover:bg-[#38384F] border-[#838391]/50 border"
      } flex justify-start items-center w-full h-[48px] cursor-pointer font-spartan font-bold text-[12px] transition duration-200`}
    >
      <p
        className={`${
          active ? "text-[#a7a7b8]" : "text-[#838391]"
        } leading-[25px] tracking-widest ml-6`}
      >
        {num}
      </p>
      <p className="text-white uppercase leading-[25px] tracking-widest ml-6">
        {name}
      </p>
    </div>
  );
};

export default Button;
