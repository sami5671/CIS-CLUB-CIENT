import SectionTitle from "./../../Components/SectionTitle/SectionTitle";
import img from "../../assets/Programming/c.png";
import { CgNotes } from "react-icons/cg";
import { IoBarChartOutline } from "react-icons/io5";

const Programming = () => {
  return (
    <section className="bg-slate-900">
      <div className="mb-12">hello</div>

      <SectionTitle
        heading={"Foundation of Programming"}
        subheading={"Enhance Your Knowledge"}
      ></SectionTitle>

      {/* card */}

      <div>
        <div className="w-44 h-12 bg-lime-200"></div>
        <div>
          <img src={img} className="w-[40px] h-[40px]" alt="" />
        </div>
        <div>
          <h1>Practice C++</h1>
          <p>
            Practice problems of C++, the language most used for DSA and low
            level programming
          </p>
          <hr />
          <p>
            <span>
              <CgNotes />
              67 Problems
            </span>
          </p>
          <p>
            <span>
              <IoBarChartOutline />
              Beginner level
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programming;
