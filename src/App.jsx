import React from "react";
import { Navbar, Planet, PlanetInfo, Stats } from "./components";

const App = () => (
  <main className="flex bg-[#070724]">
    <Navbar />
    <Planet />
    <PlanetInfo />
    <Stats />
  </main>
);

export default App;
