import React from "react";
import Button from "./Button";

const PlanetInfo = ({ planet }) => {
  const color = planet.color;
  return (
    <div className="flex flex-col w-[350px] h-[500px] justify-start items-start mt-[80px]">
      <h1 className="text-[#FFFFFF] uppercase font-antonio text-[80px] leading-[104px] p-4">
        {planet.name}
      </h1>
      {/* planet info */}
      <p className="text-[#FFFFFF] font-spartan font-normal text-[14px] leading-[25px] p-4">
        {planet.desc.overview}
      </p>
      <p className="text-[#FFFFFF] font-spartan font-normal text-[14px] leading-[25px] p-4">
        Source:{" "}
        <a href="www.wikipedia.com" className="underline">
          Wikipedia
        </a>
      </p>
      {/* buttons */}
      <div className="flex flex-col w-full h-[176px] space-y-2">
        <Button num={"01"} name="overview" color={color} />
        <Button num={"02"} name="internal structure" color={color} />
        <Button num={"03"} name="surface geology" color={color} />
      </div>
    </div>
  );
};

export default PlanetInfo;
