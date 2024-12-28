import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import sliderImg1 from "../../assets/sliderImage/slider-1.jpg.jpg"
import sliderImg2 from "../../assets/sliderImage/slider-2.jpg.jpg"
import sliderImg3 from "../../assets/sliderImage/slider-3.jpg.jpg"
import sliderImg4 from "../../assets/sliderImage/slider-4.jpg.jpg"

const Banner = () => {
 
  return (
    <div className="w-full h-screen">
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img className="w-full h-full object-cover" src={sliderImg1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-full object-cover" src={sliderImg2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-full object-cover" src={sliderImg3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-full object-cover" src={sliderImg4} alt="" />
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Banner;
