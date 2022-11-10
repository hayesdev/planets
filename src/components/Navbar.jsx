import { NavLink } from "react-router-dom";
import { planets } from "../constants";

const Navbar = () => (
  // TODO: create active state
  <nav className="flex w-full h-[80px] justify-between items-center border-[#FFFFFF]/20 border-b">
    <h1 className="uppercase font-antonio font-semibold text-[25px] ml-8 my-4  text-[#FFFFFF] cursor-pointer">
      The Planets
    </h1>
    <div className="flex w-[660px] h-full justify-around mr-4">
      {planets.map(({ name, id }) => (
        <div
          key={id}
          className={`flex flex-col justify-center uppercase font-spartan font-bold text-[11px] ml-4 h-full text-[#FFFFFF]/75 hover:text-[#FFFFFF] leading-[25px] tracking-[1px] transition-all duration-200 cursor-pointer ${
            id !== planets.length ? "mr-0" : "mr-4"
          }`}
        >
          <NavLink to={name === "Earth" ? "/" : `/${name}`}>{name}</NavLink>
        </div>
      ))}
    </div>
  </nav>
);

export default Navbar;
