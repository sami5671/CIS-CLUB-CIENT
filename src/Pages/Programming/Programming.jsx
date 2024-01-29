import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/UseAxiosPublic";
import CardDetails from "./CardDetails";
import SectionTitleProgramming from "./../../Components/SectionTitle/SectionTitleProgramming";

const Programming = () => {
  // =================================================================
  const axiosPublic = useAxiosPublic();
  const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   axiosPublic.get("/programmingCard").then((res) => {
  //     setCards(res.data);
  //   });
  // }, [axiosPublic]);

  useEffect(() => {
    fetch("card.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  console.log(cards);
  // =================================================================
  return (
    <section className="">
      <div className="mb-16 text-white">hello</div>

      <SectionTitleProgramming
        subheading={"Enhance Your Knowledge"}
        heading={"Foundation of Programming"}
      ></SectionTitleProgramming>

      {/* card */}
      <div className="grid grid-cols-4 gap-1 lg:px-20">
        {cards.map((card) => (
          <CardDetails key={card._id} card={card}></CardDetails>
        ))}
      </div>
    </section>
  );
};

export default Programming;
