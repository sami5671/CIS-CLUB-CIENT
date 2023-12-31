import Banner from "../Banner/Banner";
import Gallery from "./Gallery";
import MemberShipPolicy from "./MemberShipPolicy";
import Testimonial from "./Testimonial/Testimonial";
import UpcomingEvents from "./UpcomingEvents";
import WhatWeOffer from "./WhatWeOffer";

const Home = () => {
  return (
    <>
      <div>
        <h1 className="text-white mb-10">home</h1>
        <Banner></Banner>
        <WhatWeOffer></WhatWeOffer>
        <UpcomingEvents></UpcomingEvents>
        <MemberShipPolicy></MemberShipPolicy>
        <Testimonial></Testimonial>
        <Gallery></Gallery>
      </div>
    </>
  );
};

export default Home;
