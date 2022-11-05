import React from "react";

const App = () => (
  <div className="flex flex-col justify-start items-center w-full h-screen bg-[#070724] relative">
    <Navbar />
    {planets.map((planet) => {
      return (
        <div>
          <section className="flex justify-around w-full">
            <Planet planet={planet} />
            <PlanetInfo planet={planet} />
          </section>
          <Stats planet={planet} />
        </div>
      );
    })}
  </div>
);

export default App;
