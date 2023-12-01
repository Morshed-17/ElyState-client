import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import Heading from "../../../components/Heading/Heading";
import Review from "./Review";
import Container from "../../../components/Container/Container";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container>
      <div className="mt-12">
        <Heading title={"Reviews"} subTitle={"What Our Users Says"} />
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={1}
          navigation={true}
          loop={true}
          modules={[Pagination, Navigation]}
          
          className="mySwiper"
        >
          {reviews?.map((review) => (
            <SwiperSlide key={review?.title}>
              <Review review={review}></Review>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Reviews;
