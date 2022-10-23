import { planets } from "../constants";

const Navbar = () => (
  <nav className="flex flex-1 w-full h-[40px] justify-between items-center text-[#FFFFFF]">
    <h1 className="uppercase font-antonio font-semibold text-[25px]">
      The Planets
    </h1>
    <div className="md:hidden flex flex-row">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>

    <div className="flex flex-row">
      {planets.map(({ name, id }) => (
        <div key={id} className="uppercase font-spartan text-[16px]">
          {name}
        </div>
      ))}
    </div>
  </nav>
);

export default Navbar;
