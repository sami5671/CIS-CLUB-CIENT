import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo2.jpeg";

const Navbar = () => {
  // =========================navigation here =========================
  const navOptions = (
    <>
      <li className="glow">
        <Link to="/">Home</Link>
      </li>
      <li className="glow">
        <Link to="/">Programming</Link>
      </li>
      <li className="glow">
        <Link to="/">Cultural</Link>
      </li>
      <li className="glow">
        <Link to="/">Sports</Link>
      </li>
      <li className="glow">
        <Link to="/">About Us</Link>
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
              className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 text-black rounded-box w-52"
            >
              {navOptions}
              {/* <UserMenu></UserMenu> */}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <div className="">
              <a
                href="/"
                className="bg-gradient-to-r from-blue-500 to-purple-900 text-transparent bg-clip-text font-bold font-Rancho tracking-tight hover:tracking-wide lg:text-4xl ml-4 lg:ml-8"
              >
                CIS CLUB
              </a>
            </div>
            <div className="hidden sm:block">
              <img className="w-[40px] h-[40px]" src={logo} alt="" />
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
