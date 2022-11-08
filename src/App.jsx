import React from "react";
import { Navbar, Planet, PlanetInfo, Stats } from "./components";
import { planets } from "./constants";

const App = () => (
  <div className="flex flex-col justify-center items-center w-full h-screen bg-[#070724]">
    <Navbar />
    <div className="flex flex-col justify-center items-center w-[80%] h-full border border-white">
      <section className="flex w-full h-[80%] border border-white">
        <Planet />
        <PlanetInfo />
      </section>
      <section className="flex w-full h-[20%]">
        <Stats planet={planets[0]} />
      </section>
    </div>
  </div>
);

export default App;
