import { planets } from "../constants";

const Navbar = () => (
  <nav className="flex flex-1 w-full h-[40px] justify-between items-center border-[#FFFFFF]/20 border-b">
    <h1 className="uppercase font-antonio font-semibold text-[25px] ml-8 my-4  text-[#FFFFFF] cursor-pointer">
      The Planets
    </h1>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 xs:hidden inline-block"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>

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
