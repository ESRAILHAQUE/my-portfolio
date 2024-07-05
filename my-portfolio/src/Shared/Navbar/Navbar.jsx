import { NavLink, useLocation } from "react-router-dom";
import Resume from "../../assets/Resume/Resume.pdf";
import "./Navbar.css"; // Import your CSS file

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const NavLinks = (
    <>
      <li className="nav-item">
        <NavLink
          to="/"
          className={`hover:text-primary-color ${
            isActive("/") ? "text-primary-color" : ""
          }`}
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/aboutme"
          className={`hover:text-primary-color ${
            isActive("/aboutme") ? "text-primary-color" : ""
          }`}
        >
          About Me
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/projects"
          className={`hover:text-primary-color ${
            isActive("/projects") ? "text-primary-color" : ""
          }`}
        >
          Projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/skills"
          className={`hover:text-primary-color ${
            isActive("/skills") ? "text-primary-color" : ""
          }`}
        >
          Skills
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="px-4 md:px-20 lg:px-28">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {NavLinks}
            </ul>
          </div>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 space-x-6">{NavLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-primary-color text-white" href={Resume} download>
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
