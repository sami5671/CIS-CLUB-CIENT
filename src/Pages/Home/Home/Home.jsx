import Bannerr from "../Banner/Bannerr";
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
        <Bannerr></Bannerr>
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
