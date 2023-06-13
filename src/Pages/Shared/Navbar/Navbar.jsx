import { useContext} from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { AuthContext } from "../../../Providers/AuthProviders";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const {toggleTheme, isDarkTheme} = useContext(ThemeContext);
  console.log(isDarkTheme);
  console.log(user)
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="text-2xl font-extrabold">Athletic Excellence School</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="classes">Classes</NavLink>
            </li>
            <li>
              <NavLink to="instructors">Instructors</NavLink>
            </li>
            <li>
              <NavLink to="dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="flex gap-3">
            {isDarkTheme ? (
              <MdLightMode
                className="text-3xl text-white"
                onClick={toggleTheme}
              />
            ) : (
              <MdDarkMode
                className="text-3xl text-black"
                onClick={toggleTheme}
              />
            )}
          </div>
          <a className="btn md:mx-4">Button</a>
        </div>

        <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
