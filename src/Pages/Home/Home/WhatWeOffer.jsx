import { FaWpexplorer } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import programming from "../../../assets/Others/Programming1.jpg";
import cultural from "../../../assets/Others/cultural2.jpg";
import sports from "../../../assets/Others/sports.jpg";

const WhatWeOffer = () => {
  return (
    <div>
      <SectionTitle
        heading={"What we offer"}
        subHeading={"We believe in quality not quantity"}
      ></SectionTitle>

      {/* text section */}
      <div className=" px-4 leading-tight lg:text-center lg:px-48">
        <p className="text-slate-500">
          CIS Club is a vibrant community with programming exploring innovative
          technologies, the cultural section celebrating diversity through
          engaging events, and the sports section promoting an active lifestyle
          with exciting events. Join us for a holistic experience blending
          technology, culture, and sports in an inclusive environment for
          enthusiasts to explore, excel, and enjoy.
        </p>
      </div>

      {/* card section */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-4 lg:px-32">
        {/* card 1  */}
        <div className="card shadow-2xl transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 duration-300">
          <figure>
            <img
              src={programming}
              className="w-[500px] lg:h-[250px]"
              alt="image1"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold font-Rancho text-amber-400 uppercase border-b-2 border-b-amber-100">
              Programming
            </h2>
            <p className="text-slate-500 leading-tight">
              CIS Club Programming Contest: Unleash your coding prowess in our
              dynamic competition. Solve challenges, showcase your skills, and
              join fellow enthusiasts in a thrilling exploration of programming
              excellence. Join now!
            </p>
            <div className="">
              <button className="px-6 py-2 border-b-4 border-b-orange-400 rounded-lg bg-amber-400 font-bold border-2 text-white hover:bg-white hover:text-black cursor-pointer">
                <span className="flex items-center gap-1">
                  <FaWpexplorer className="lg:text-xl font-bold" />
                  Explore
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* card 2  */}
        <div className="card shadow-2xl   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <figure>
            <img
              src={cultural}
              className="w-[500px] lg:h-[250px]"
              alt="image1"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold font-Rancho text-amber-400 uppercase border-b-2 border-b-amber-100">
              Cultural Activities
            </h2>
            <p className="text-slate-500 leading-tight">
              CIS Club Cultural Activities: Immerse yourself in a world of
              diversity and creativity. Join our cultural events, celebrate
              traditions, and engage in vibrant exchanges to foster a sense of
              community and understanding.
            </p>
            <div className="">
              <button className="px-6 py-2 border-b-4 border-b-orange-400 rounded-lg bg-amber-400 font-bold border-2 text-white hover:bg-white hover:text-black cursor-pointer">
                <span className="flex items-center gap-1">
                  <FaWpexplorer className="lg:text-xl font-bold" />
                  Explore
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* card 3  */}
        <div className="card shadow-2xl   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <figure>
            <img src={sports} className="w-[500px] lg:h-[250px]" alt="image1" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold font-Rancho text-amber-400 uppercase border-b-2 border-b-amber-100">
              Sports
            </h2>
            <p className="text-slate-500 leading-tight">
              Embrace an active lifestyle with our exhilarating sports events.
              Join fellow enthusiasts, participate in exciting activities, and
              elevate your fitness journey in a supportive and energetic
              community.
            </p>
            <div className="">
              <button className="px-6 border-b-4 border-b-orange-400 font-bold rounded-lg py-2 bg-amber-400 border-2 text-white hover:bg-white hover:text-black cursor-pointer">
                <span className="flex items-center gap-1">
                  <FaWpexplorer className="lg:text-xl font-bold" />
                  Explore
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeOffer;
