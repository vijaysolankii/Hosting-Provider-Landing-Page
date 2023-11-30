import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import Quote from '../assets/images/quotes.svg'

// import required modules
import { Scrollbar } from "swiper/modules";

const ReviewSlider = ({ data }) => {
  return (
    <Swiper
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
      slidesPerView={1.4}
      spaceBetween={30}
      className="reviewSlider bg-white px-5 py-16"
    >
      {data.map((item, _) => (
        <SwiperSlide key={_}>
          <i><img src={Quote} alt="quote" /></i>
          <h5>{data && data.name}</h5>
          <span>{data && data.designation}</span>
          <p>{data && data.review}</p>
          <p>{data && data.stars}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSlider;
