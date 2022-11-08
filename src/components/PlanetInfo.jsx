import React from "react";
import Button from "./Button";

const PlanetInfo = ({ planet }) => (
  <div className="flex flex-col items-start justify-center w-[34%] h-full">
    <p className="uppercase font-antonio font-normal text-[80px] text-[#FFFFFF] leading-[103px] mt-20">
      {planet.name}
    </p>
    <p className="font-spartan font-normal text-[14px] text-[#FFFFFF] leading-[25px] my-4">
      {planet.desc.overview}
    </p>
    <p className="font-spartan font-extralight text-[14px] text-[#FFFFFF] leading-[25px]">
      Source:{" "}
      <a href="www.wikipedia.com" className="decoration-underline">
        Wikipedia
      </a>
    </p>
    {/* buttons */}
    <section className="flex flex-col w-full h-full justify-center">
      <Button num={"01"} name={"overview"} color={planet.color} />
      <Button num={"02"} name={"internal structure"} color={planet.color} />
      <Button num={"03"} name={"surface geology"} color={planet.color} />
    </section>
  </div>
);

export default PlanetInfo;
