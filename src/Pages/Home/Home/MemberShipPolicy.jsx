import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import membership from "../../../assets/Others/membership.jpeg";
import { FaUserSecret } from "react-icons/fa";
const MemberShipPolicy = () => {
  return (
    <div className="mt-24">
      <SectionTitle
        heading={"MemberShip Policy"}
        subHeading={"Become a Member & get facility"}
      ></SectionTitle>

      <section className="lg:ml-40 px-4 mt-16">
        <div className="flex flex-col-reverse lg:flex-row lg:gap-56">
          <div className="">
            <p className="text-slate-500 leading-tight px-1">
              Unlock a world of coding excellence with CIS Club membership!
              Enjoy boundless access to CIS Programming Practice led by industry
              experts. Sharpen your skills and make meaningful contributions to
              our vibrant cultural and sports community. All this, for an
              incredibly affordable membership fee of only 100. Join us in the
              journey of learning, innovation, and camaraderie. Your gateway to
              limitless possibilities awaits – seize the opportunity with CIS
              Club today!
            </p>
            <button className="px-8 mt-4 py-2 border-b-4 border-b-orange-400 bg-amber-400  font-bold border-2 rounded-lg text-white hover:bg-white hover:text-black cursor-pointer">
              <span className="flex items-center gap-2">
                <FaUserSecret className="lg:text-2xl" />
                JOIN US
              </span>
            </button>
          </div>

          <div className="">
            <img src={membership} className="w-[400px] lg:w-2/3" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MemberShipPolicy;
