import React from "react";

const PlanetInfo = ({ planet }) => (
  <div className="flex flex-col items-start justify-center w-[33%] h-full">
    <p className="uppercase font-antonio font-normal text-[80px] text-[#FFFFFF] leading-[103px] mt-20">
      {planet.name}
    </p>
    <p className="font-spartan font-normal text-[14px] text-[#FFFFFF] leading-[25px]">
      {planet.desc.overview}
    </p>
    <p className="font-spartan font-normal text-[14px] text-[#FFFFFF] leading-[25px]">
      Source:{" "}
      <a href="www.wikipedia.com" className="decoration-underline">
        Wikipedia
      </a>
    </p>
    <section>
      <Button />
      <Button />
      <Button />
    </section>
  </div>
);

export default PlanetInfo;
