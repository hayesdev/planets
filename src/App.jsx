import React from "react";
import { Navbar, Planet, PlanetInfo, Stats } from "./components";

const App = () => (
  <div className="flex flex-col w-full h-screen bg-[#070724]">
    <Navbar />
    <Planet />
    <PlanetInfo />
    <Stats />
  </div>
);

export default App;
