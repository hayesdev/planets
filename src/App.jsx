import React from "react";
import { Navbar, Planet, PlanetInfo, Stats } from "./components";

const App = () => (
  <div className="flex w-full h-full bg-[#070724]">
    <Navbar />
    <Planet />
    <PlanetInfo />
    <Stats />
  </div>
);

export default App;
