import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const UpcomingEvents = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <section className="mt-28">
        <SectionTitle
          heading={"Our Upcoming Events"}
          subHeading={"Grab the Opportunity & take Reward"}
        ></SectionTitle>
      </section>

      <section className="mt-24">
        {/* event 1 */}
        <div className="flex gap-4 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-90 duration-300">
          <div className="p-4 lg:px-12 lg:py-4 text-white lg:text-2xl font-bold bg-gradient-to-br from-purple-800 to-blue-500">
            <p>MAY 30</p>
          </div>
          <div className="ml-auto lg:px-12 text-slate-500">
            <h1 className="lg:text-3xl">Programming Contest Fun in C/C++</h1>
            <p>Daffodil Smart City, Asulia</p>
          </div>
        </div>
        <div className="border border-blue-500"></div>

        {/* event 1 */}

        {/* event 2 */}
        <div className="flex gap-4 mt-8 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-90 duration-300">
          <div className="px-2 mr-auto lg:px-12 text-slate-500">
            <h1 className="lg:text-3xl">Business Contest On Fashion</h1>
            <p>Daffodil Smart City, Asulia</p>
          </div>
          <div className="p-4 lg:px-12 lg:py-4 text-white  lg:text-2xl font-bold bg-gradient-to-br from-red-500 to-purple-500">
            <p>June 1</p>
          </div>
        </div>
        <div className="border border-purple-500"></div>

        {/* event 2 */}

        {/* event 3 */}
        <div className="flex mt-8 gap-4 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-90 duration-300">
          <div className="p-4 lg:px-12 lg:py-4 text-white lg:text-2xl font-bold bg-gradient-to-br from-lime-600 to-slate-200">
            <p>Aug 30</p>
          </div>
          <div className="ml-auto lg:px-12 text-slate-500">
            <h1 className="lg:text-3xl">Web Development Contest</h1>
            <p>Daffodil Smart City, Asulia</p>
          </div>
        </div>
        <div className="border border-lime-500"></div>

        {/* event 3 */}

        {/* event 2 */}
        <div className="flex gap-4 mt-8 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-90 duration-300">
          <div className="px-2 mr-auto lg:px-12 text-slate-500">
            <h1 className="lg:text-3xl">CyberSecurity Contest</h1>
            <p>Daffodil Smart City, Asulia</p>
          </div>
          <div className="p-4 lg:px-12 lg:py-4 text-white  lg:text-2xl font-bold bg-gradient-to-l from-yellow-500 to-blue-600">
            <p>Oct 1</p>
          </div>
        </div>
        <div className="border border-yellow-500"></div>

        {/* event 2 */}
      </section>
    </div>
  );
};

export default UpcomingEvents;
