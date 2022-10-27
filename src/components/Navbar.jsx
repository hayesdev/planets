import { planets } from "../constants";

const Navbar = () => (
  <nav className="flex w-full h-[80px] justify-between items-center border-[#FFFFFF]/20 border-b fixed bg-[#070724]">
    <h1 className="uppercase font-antonio font-semibold text-[25px] ml-8 my-4  text-[#FFFFFF] cursor-pointer">
      The Planets
    </h1>
    <div className="flex">
      {planets.map(({ name, id }) => (
        <div
          key={id}
          className={`uppercase font-spartan font-bold text-[11px] leading-[25px] tracking-wider ml-4 my-4 h-full text-[#FFFFFF]/75 hover:text-[#FFFFFF] transition-all duration-200 cursor-pointer ${
            id !== planets.length ? "mr-0" : "mr-4"
          }`}
        >
          {name}
        </div>
      ))}
    </div>
  </nav>
);

export default Navbar;
