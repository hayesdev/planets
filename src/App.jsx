import React from "react";
import { Navbar, Planet, PlanetInfo, Stats } from "./components";
import { planets } from "./constants";

const App = () => (
  <div className="flex flex-col justify-start items-center w-full h-screen bg-[#070724] relative">
    <Navbar />
    <section className="flex justify-between w-full py-4 px-10 max-w-7xl mt-6">
      <Planet />
      <PlanetInfo planet={planets[1]} />
    </section>
    <section className="flex w-full h-[180px]">
      <Stats planet={planets[1]} />
    </section>
  </div>
);

export default App;
