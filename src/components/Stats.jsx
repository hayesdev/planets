import React from "react";

const Stats = ({ planet }) => (
  <div className="flex w-[85%] justify-center h-[250px] mt-[80px]">
    <div className="flex flex-col justify-center w-[255px] h-[128px] border border-[#838391]/50 mx-[15px]">
      <p className="uppercase font-spartan font-semibold text-[11px] text-[#FFFFFF]/50 leading-[25px] tracking-wider ml-8">
        Rotation Time
      </p>
      <p className="uppercase font-antonio font-normal text-[40px] text-[#FFFFFF] leading-[52px] tracking-tighest ml-8 mb-4">
        {planet.rotTime}
      </p>
    </div>
    <div className="flex flex-col justify-center w-[255px] h-[128px] border border-[#838391]/50 mx-[15px]">
      <p className="uppercase font-spartan font-semibold text-[11px] text-[#FFFFFF]/50 leading-[25px] tracking-wider ml-8">
        Rotation Time
      </p>
      <p className="uppercase font-antonio font-normal text-[40px] text-[#FFFFFF] leading-[52px] tracking-tighest ml-8 mb-4">
        {planet.rotTime}
      </p>
    </div>
    <div className="flex flex-col justify-center w-[255px] h-[128px] border border-[#838391]/50 mx-[15px]">
      <p className="uppercase font-spartan font-semibold text-[11px] text-[#FFFFFF]/50 leading-[25px] tracking-wider ml-8">
        Rotation Time
      </p>
      <p className="uppercase font-antonio font-normal text-[40px] text-[#FFFFFF] leading-[52px] tracking-tighest ml-8 mb-4">
        {planet.rotTime}
      </p>
    </div>
    <div className="flex flex-col justify-center w-[255px] h-[128px] border border-[#838391]/50 mx-[15px]">
      <p className="uppercase font-spartan font-semibold text-[11px] text-[#FFFFFF]/50 leading-[25px] tracking-wider ml-8">
        Rotation Time
      </p>
      <p className="uppercase font-antonio font-normal text-[40px] text-[#FFFFFF] leading-[52px] tracking-tighest ml-8 mb-4">
        {planet.rotTime}
      </p>
    </div>
  </div>
);

export default Stats;
