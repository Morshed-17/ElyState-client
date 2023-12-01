import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/all-properties"
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
        >
          All properties
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="mx-auto ">
      <div className="navbar max-w-screen-xl mx-auto px-5 md:px-7 lg:px-10 items-center">
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
            <ul className="menu menu-sm dropdown-content text-lg font-semibold mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navlinks}
            </ul>
          </div>
          <Link>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-semibold">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end text-lg font-semibold text-gray-600">
        <p>Kazi apa</p>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
