import React from "react";

const App = () => (
  <div className="flex flex-col justify-start items-center w-full h-screen bg-[#070724] relative">
    <Navbar />
    <section className="flex justify-evenly w-full">
      <Planet />
      <PlanetInfo planet={planets[0]} />
    </section>

    <Stats planet={planets[0]} />
  </div>
);

export default App;
