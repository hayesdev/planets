import React from "react";

const Planet = (planet) => (
  <div className="flex flex-col w-[700px] h-[550px] justify-center items-center text-white">
    {/* TODO: make planets dynamic */}
    <div className={`w-[290px] h-[290px] bg-[#EDA249] rounded-full z-0`}></div>
  </div>
);

export default Planet;
