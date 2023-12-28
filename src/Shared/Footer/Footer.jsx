import logo from "../../assets/Images/logo2.jpeg";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-slate-700 text-white mt-12">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <img src={logo} className="w-[40px] h-[40px]" alt="" />
          <p className="text-slate-500 ">
            Daffodil International University (CIS CLUB). <br />
            @All Rights Reserved by CIS CLUB & Sami-15th
          </p>
        </aside>
        <p className="text-slate-500 mt-12"></p>
        <nav className="md:place-self-center md:justify-self-end text-2xl">
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaGlobe className="text-green-400" />
            </a>
            <a>
              <FaFacebook className="text-blue-500" />
            </a>
            <a>
              <IoLogoYoutube className="text-red-600" />
            </a>
            <a>
              <FaTwitter className="text-cyan-400" />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
