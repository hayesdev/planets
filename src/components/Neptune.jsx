import React from "react";
import Planet from "./Planet";
import PlanetInfo from "./PlanetInfo";
import Stats from "./Stats";
import { planets } from "../constants";

const Neptune = () => (
  <div className="flex flex-col justify-center items-center w-[80%] h-full">
    {/* planet info */}
    <div className="flex w-full h-[80%] ">
      <Planet planet={planets[7]} />
      <PlanetInfo planet={planets[7]} />
    </div>
    {/* stats */}
    <div className="flex w-full h-[20%]">
      <Stats planet={planets[7]} />
    </div>
  </div>
);

export default Neptune;
