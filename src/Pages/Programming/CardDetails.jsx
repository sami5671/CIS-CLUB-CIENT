import { CgNotes } from "react-icons/cg";
import { IoBarChartOutline } from "react-icons/io5";
const CardDetails = ({ card }) => {
  // ==================================================================
  const { img, name, description, problem, level, color, link } = card;

  const cardStyle = {
    backgroundColor: color || "black",
  };
  // =================================================================
  return (
    <>
      <a href={link}>
        <div className="transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="mt-12 rounded-md shadow-lg shadow-slate-400 h-[300px] w-[250px]">
            <div className="w-full h-[50px]" style={cardStyle}></div>
            <div className="absolute -mt-4 ml-2">
              <img
                src={img}
                className="w-[40px] h-[40px] rounded-full"
                alt=""
              />
            </div>
            <div className="px-2 py-10">
              <h1 className="font-bold text-[18px] hover:text-slate-400">
                {name}
              </h1>

              <p className="text-slate-500">{description}</p>
              <p>
                <span className="flex items-center gap-2 mt-2">
                  <CgNotes />
                  {problem}
                </span>
              </p>
              <p>
                <span className="flex items-center gap-2">
                  <IoBarChartOutline />
                  {level}
                </span>
              </p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default CardDetails;
