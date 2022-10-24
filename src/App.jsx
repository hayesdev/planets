import React from "react";
import { Navbar, Planet, PlanetInfo, Stats } from "./components";
import { planets } from "./constants";

const App = () => (
  <div className="flex flex-col justify-start items-center w-full h-screen bg-[#070724] relative">
    <Navbar />
    <Planet planet={planets[0]} />
    <PlanetInfo />
    <Stats />
  </div>
);

export default App;
