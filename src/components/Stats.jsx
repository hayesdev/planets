import React from "react";

const Stats = ({ planet }) => (
  <div className="flex justify-around items-center w-full h-[200px] mt-10 space-x-1">
    <div className="flex flex-col justify-start w-[255px] h-[128px] border-[#838391]/50 border">
      <p className="uppercase font-spartan font-bold text-[11px] leading-[25px] tracking-[1px] text-[#FFFFFF]/50 ml-6 mt-4">
        rotation time
      </p>
      <p className="uppercase font-antonio font-normal text-[40px] leading-[52px] -tracking-[1.5px] text-[#FFFFFF] ml-6">
        {planet.rotTime}
      </p>
    </div>
    <div className="flex flex-col w-[255px] h-[128px] border-[#838391]/50 border">
      <p className="uppercase font-spartan font-bold text-[11px] leading-[25px] tracking-[1px] text-[#FFFFFF]/50 ml-6 mt-4">
        revolution time
      </p>
      <p className="uppercase font-antonio font-normal text-[40px] leading-[52px] -tracking-[1.5px] text-[#FFFFFF] ml-6">
        {planet.revTime}
      </p>
    </div>
    <div className="flex flex-col w-[255px] h-[128px] border-[#838391]/50 border">
      <p className="uppercase font-spartan font-bold text-[11px] leading-[25px] tracking-[1px] text-[#FFFFFF]/50 ml-6 mt-4">
        radius
      </p>
      <p className="uppercase font-antonio font-normal text-[40px] leading-[52px] -tracking-[1.5px] text-[#FFFFFF] ml-6">
        {planet.radius}
      </p>
    </div>
    <div className="flex flex-col w-[255px] h-[128px] border-[#838391]/50 border">
      <p className="uppercase font-spartan font-bold text-[11px] leading-[25px] tracking-[1px] text-[#FFFFFF]/50 ml-6 mt-4">
        average temp.
      </p>
      <p className="uppercase font-antonio font-normal text-[40px] leading-[52px] -tracking-[1.5px] text-[#FFFFFF] ml-6">
        {planet.avgTemp}
      </p>
    </div>
  </div>
);

export default Stats;
