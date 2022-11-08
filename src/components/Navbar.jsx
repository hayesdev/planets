import { planets } from "../constants";

const Navbar = () => (
  <nav className="flex flex-1 w-full h-[40px] justify-between items-center border-[#FFFFFF]/20 border-b">
    <h1 className="uppercase font-antonio font-semibold text-[25px] ml-8 my-4  text-[#FFFFFF] cursor-pointer">
      The Planets
    </h1>
    <div className="flex xs:flex-row">
      {planets.map(({ name, id }) => (
        <div
          key={id}
          className={`uppercase font-spartan font-medium text-[11px] ml-4 my-4 h-full text-[#838391] hover:text-[#FFFFFF] transition-all duration-200 cursor-pointer ${
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
