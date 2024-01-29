import { GiVikingChurch } from "react-icons/gi";

const SectionTitleProgramming = ({ subHeading, heading }) => {
  return (
    <div className="mx-auto text-center font-Rancho md: w-4/12 my-8">
      <GiVikingChurch className="mx-auto text-2xl text-blue-500" />
      {/* <p className="text-blue-800 mb-2">-----{subHeading}-----</p> */}
      <p className="text-3xl mt-2 text-blue-500 uppercase border-y-2 border-blue-200 py-2">
        {heading}
      </p>
    </div>
  );
};

export default SectionTitleProgramming;
