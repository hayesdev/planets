import React from "react";
import { Navbar, Planet, PlanetInfo, Stats } from "./components";
import { planets } from "./constants";

const App = () => (
  <div className="flex flex-col justify-start items-center w-full h-screen bg-[#070724] relative">
    <Navbar />
    <section className="flex justify-between w-full py-4 px-10 max-w-7xl mt-10">
      <Planet />
      <PlanetInfo planet={planets[0]} />
    </section>
    <section className="flex w-full">
      <Stats />
    </section>
  </div>
);

export default App;
