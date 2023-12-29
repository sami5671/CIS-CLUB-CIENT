import Banner from "../Banner/Banner";
import MemberShipPolicy from "./MemberShipPolicy";
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
      </div>
    </>
  );
};

export default Home;
