import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  // =================================================================
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  // =================================================================
  return (
    <div className="mt-24 max-w-screen-xl mx-auto">
      <SectionTitle
        heading={"Testimonials"}
        subHeading={"What out Members say"}
      ></SectionTitle>

      <section>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center mx-24 my-16">
                <img
                  src={review.userPic}
                  className="w-[100px] h[100px] rounded-full"
                  alt=""
                />
                <Rating
                  style={{ maxWidth: 190 }}
                  value={review.rating}
                  readOnly
                />
                <p className="py-8 text-slate-500 font-Rancho text-2xl">
                  {review.details}
                </p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonial;
