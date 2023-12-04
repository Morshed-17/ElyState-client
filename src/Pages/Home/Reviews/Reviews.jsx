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
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  
  const axiosSecure = useAxiosSecure()
  useEffect(() => {
   axiosSecure(`/reviews`)
   .then(res => setReviews(res.data))
  }, [])
  return (
    <Container>
      <div className="my-12">
        <Heading title={"Reviews"} subTitle={"What Our Users Says"} />
        <div className="mt-12">
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
      </div>
    </Container>
  );
};

export default Reviews;
