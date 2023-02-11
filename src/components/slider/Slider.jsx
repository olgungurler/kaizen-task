// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./slider.css";

function Slider() {
  return (
    <>
      <div className="swiper-section">
        <div className="container">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="deneme">
              <img src="./img/slider/slider-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./img/slider/slider-2.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./img/slider/slider-3.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./img/slider/slider-4.jpeg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Slider;
