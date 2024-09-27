import { NavLink } from "react-router-dom";
interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  return (
    <nav>
      <ul className="hidden md:flex gap-5 text-sm">
        <NavLink
          target="_top"
          to="/"
          className="flex flex-col items-center gap-1"
        >
          <p>Home</p>
          <hr
            className={`w-2/4 border-none h-[1.5px] hidden ${
              isScrolled ? "bg-white" : "bg-gray-700"
            }`}
          />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr
            className={`w-2/4 border-none h-[1.5px] hidden ${
              isScrolled ? "bg-white" : "bg-gray-700"
            }`}
          />
        </NavLink>
        <NavLink
          target="_top"
          to="/about"
          className="flex flex-col items-center gap-1"
        >
          <p>About</p>
          <hr
            className={`w-2/4 border-none h-[1.5px] hidden ${
              isScrolled ? "bg-white" : "bg-gray-700"
            }`}
          />
        </NavLink>
        <NavLink
          target="_top"
          to="/contact"
          className="flex flex-col items-center gap-1"
        >
          <p>Contact</p>
          <hr
            className={`w-2/4 border-none h-[1.5px] hidden ${
              isScrolled ? "bg-white" : "bg-gray-700"
            }`}
          />
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
