import React from "react";
import { Navbar, Planet, PlanetInfo, Stats } from "./components";
import { planets } from "./constants";

const App = () => (
  <div className="flex flex-col justify-start items-center w-full h-screen bg-[#070724] relative">
    <Navbar />
    {planets.map((planet) => (
      <div
        key={planet.name}
        className="flex flex-col justify-center w-full bg-[#070724]"
      >
        <section id={planet.name} className="flex justify-around w-full">
          <Planet planet={planet} />
          <PlanetInfo planet={planet} />
        </section>
        <Stats planet={planet} />
      </div>
    ))}
  </div>
);

export default App;
