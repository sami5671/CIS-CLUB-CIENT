import { FaFacebook, FaGlobe, FaTwitter } from "react-icons/fa";
import banner from "../../../assets/Images/banner.jpg";
import { IoLogoYoutube } from "react-icons/io";
import { MdAddIcCall } from "react-icons/md";

const Banner = () => {
  return (
    <div className="relative bg-cover bg-center h-80 md:h-96 lg:h-screen flex">
      <img
        className="absolute w-full h-full object-cover object-center opacity-90"
        src={banner}
        alt="Banner"
      />
      <div className="absolute bg-slate-900 bg-opacity-60 w-full h-full rounded-md flex flex-col justify-center px-4">
        <div className="lg:px-44">
          <h2 className="text-2xl lg:text-7xl mt-2 font-bold mb-4 lg:mb-10 text-white">
            Elevate Passion, Join CIS Club for Excellence Journey!
          </h2>
          <p className="text-[12px] px-2 md:text-xl lg:text-[18px] text-white lg:w-8/12">
            Embark on a journey of excellence with the CIS Club! Engage in
            exhilarating programming contests, immerse yourself in vibrant
            cultural experiences, and unleash your competitive spirit in
            thrilling sports events. Join a community that celebrates diversity,
            fosters talent, and creates unforgettable moments. Elevate your
            passions at the CIS Club!
          </p>
        </div>
        <div className="absolute text-3xl hidden lg:block p-2">
          <div className="gap-4 ">
            <a href="">
              <MdAddIcCall className="text-white mb-2 hover:text-green-400" />
            </a>
            <a href="https://daffodilvarsity.edu.bd/department/cis">
              <FaGlobe className="text-white mb-2 hover:text-cyan-300" />
            </a>
            <a href="https://www.facebook.com/diucisclub">
              <FaFacebook className="text-white mb-2 hover:text-blue-500" />
            </a>
            <a href="https://youtu.be/GCEqZdc3zUQ?si=0_4ihickzyn_d2oI">
              <IoLogoYoutube className="text-white hover:text-red-600" />
            </a>
            <a href="">
              <FaTwitter className="text-white mt-2 hover:text-cyan-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
