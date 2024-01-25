import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo2.jpeg";
import { FaHome, FaUserLock } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { MdDashboard, MdSportsCricket } from "react-icons/md";
import { GiBrain } from "react-icons/gi";

const Navbar = () => {
  // =========================navigation here =========================
  const navOptions = (
    <>
      <li className="glow">
        <Link to="/">
          <div className="flex items-center gap-1">
            Home
            <FaHome />
          </div>
        </Link>
      </li>
      <li className="glow">
        <Link to="/">
          <div className="flex items-center gap-1">
            Programming
            <FaCode />
          </div>
        </Link>
      </li>
      <li className="glow">
        <Link to="/">
          <div className="flex items-center gap-1">
            Cultural <GrYoga />
          </div>
        </Link>
      </li>
      <li className="glow">
        <Link to="/">
          <div className="flex items-center gap-1">
            Sports <MdSportsCricket />
          </div>
        </Link>
      </li>
      <li className="glow">
        <Link to="/dashboard">
          <div className="flex items-center gap-1">
            Dashboard <MdDashboard />
          </div>
        </Link>
      </li>
      <li className="glow border-2 border-orange-300 px-4 hover:bg-orange-300 hover:text-white">
        <Link to="/signup">
          <div className="flex items-center gap-1">
            Login
            <FaUserLock />
          </div>
        </Link>
      </li>
    </>
  );
  // =================================================================

  return (
    <>
      <div className="navbar fixed z-10 text-black bg-opacity-30 bg-slate-400 shadow-2xl">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
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
              className="menu dropdown-content mt-2 z-[1] p-4 shadow bg-base-200 border-2 border-slate-500 text-black rounded-box w-52"
            >
              {navOptions}
              {/* <UserMenu></UserMenu> */}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <div className="">
              <a
                href="/"
                className="bg-gradient-to-br from-orange-600 to-blue-400 text-transparent bg-clip-text font-bold font-Rancho tracking-tight hover:tracking-wide lg:text-4xl ml-4 lg:ml-8"
              >
                CIS CLUB
              </a>
            </div>
            <div className="hidden sm:block">
              <GiBrain className="w-[40px] h-[40px] text-orange-400" />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 text-[16px]">{navOptions}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
