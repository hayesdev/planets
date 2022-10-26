import React from "react";

// TODO: fix spacing below stats

const Stats = ({ planet }) => (
  <div className="flex justify-between w-[1200px] h-full mx-auto font-spartan font-bold text-[11px] leading-[25px] tracking-widest text-white">
    <div className="uppercase flex flex-col justify-center items-start my-4 w-[255px] h-[128px] border-[#838391]/50 border-2 text-[11px] leading-[25px] text-[#FFFFFF]/50 ">
      <p className="ml-5 text-[11px] leading-[25px]">rotation time</p>
      <p className="ml-5 text-[40px] text-white font-antonio tracking-tighest leading-[52px]">
        {planet.rotTime}
      </p>
    </div>
    <div className="uppercase flex flex-col justify-center items-start my-4 w-[255px] h-[128px] border-[#838391]/50 border-2 text-[11px] leading-[25px] text-[#FFFFFF]/50 ">
      <p className="ml-5 text-[11px] leading-[25px]">revolution time</p>
      <p className="ml-5 text-[40px] text-white font-antonio tracking-tighest leading-[52px]">
        {planet.revTime}
      </p>
    </div>
    <div className="uppercase flex flex-col justify-center items-start my-4 w-[255px] h-[128px] border-[#838391]/50 border-2 text-[11px] leading-[25px] text-[#FFFFFF]/50 ">
      <p className="ml-5 text-[11px] leading-[25px]">radius</p>
      <p className="ml-5 text-[40px] text-white font-antonio tracking-tighest leading-[52px]">
        {planet.radius}
      </p>
    </div>
    <div className="uppercase flex flex-col justify-center items-start my-4 w-[255px] h-[128px] border-[#838391]/50 border-2 text-[11px] leading-[25px] text-[#FFFFFF]/50 ">
      <p className="ml-5 text-[11px] leading-[25px]">average temp.</p>
      <p className="ml-5 text-[40px] text-white font-antonio tracking-tighest leading-[52px]">
        {planet.avgTemp}
      </p>
    </div>
  </div>
);

export default Stats;
