import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  return (
    <div className=" max-w-screen-xl mx-auto">
      <section className="mt-28">
        <SectionTitle
          heading={"Our Success & Events"}
          subHeading={"Gallery of current & Previous Events"}
        ></SectionTitle>
      </section>
      {/* https://i.ibb.co/B2pF2sb/gallery12.jpg */}
      <Marquee direction="left" speed={50} pauseOnHover={true}>
        <section className="mt-12">
          <div className="flex gap-4">
            <div>
              <img
                src="https://i.ibb.co/YyPT2vb/gallery2.jpg"
                className="w-[150px] lg:w-[250px] h-[200px] rounded-xl"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[150px] lg:w-[250px] h-[200px] rounded-xl"
                src="https://i.ibb.co/YLN1LDr/gallery16.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[150px] lg:w-[250px] h-[200px] rounded-xl"
                src="https://i.ibb.co/S67nPyN/gallery13.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[150px] lg:w-[250px] h-[200px] rounded-xl"
                src="https://i.ibb.co/nDVx0k8/gallery3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[150px] lg:w-[250px] h-[200px] rounded-xl"
                src="https://i.ibb.co/4pMrxYb/gallery4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[150px] lg:w-[250px] h-[200px] rounded-xl"
                src="https://i.ibb.co/jW9b9Rm/gallery5.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[150px] lg:w-[250px] h-[200px] rounded-xl"
                src="https://i.ibb.co/h2HsPsN/gallery6.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
      </Marquee>
      <Marquee direction="right" speed={100} pauseOnHover={true}>
        <section className="mt-4">
          <div className="flex gap-4">
            <div>
              <img
                className="w-[150px] lg:w-[250px] h-[200px]"
                src="https://i.ibb.co/RPkbkzt/gallery7.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[150px] lg:w-[250px] h-[200px]"
                src="https://i.ibb.co/q015QWR/gallery8.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[150px] lg:w-[250px] h-[200px]"
                src="https://i.ibb.co/4Rn55P7/gallery9.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[150px] lg:w-[250px] h-[200px]"
                src="https://i.ibb.co/Lx7ZBHk/gallery10.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[150px] lg:w-[250px] h-[200px]"
                src="https://i.ibb.co/BZxjG8k/gallery11.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[150px] lg:w-[250px] h-[200px]"
                src="https://i.ibb.co/5cqPMv0/gallery14.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[150px] lg:w-[250px] h-[200px]"
                src="https://i.ibb.co/GRKDbZJ/gallery15.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
      </Marquee>
    </div>
  );
};

export default Gallery;
