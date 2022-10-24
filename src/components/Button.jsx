import React from "react";

const Button = ({ num, name, color, link }) => (
  <div className="flex justify-start items-center w-full h-[48px] cursor-pointer border-2 border-[#838391]/50 font-spartan font-bold text-[12px]">
    <p className="text-[#838391] leading-[25px] tracking-widest ml-6">{num}</p>
    <p className="text-white uppercase leading-[25px] tracking-widest ml-6">
      {name}
    </p>
  </div>
);

export default Button;
