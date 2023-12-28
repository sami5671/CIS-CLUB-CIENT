import Banner from "../Banner/Banner";
import WhatWeOffer from "./WhatWeOffer";

const Home = () => {
  return (
    <>
      <div>
        <h1 className="text-white mb-10">home</h1>
        <Banner></Banner>
        <WhatWeOffer></WhatWeOffer>
      </div>
    </>
  );
};

export default Home;
