import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import Quote from '../assets/images/quotes.svg'

// import required modules
import { Scrollbar } from "swiper/modules";
import StarRating from "./StarRating";



const ReviewSlider = ({ data }) => {

  
  return (
    <Swiper
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
      slidesPerView={2}
      spaceBetween={30}
      className="reviews-slider"
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView:2
        },
      }}
      loop={true}
    >
      {data.map((item, _) => (
        
        <SwiperSlide key={_}>
          <i><img src={Quote} alt="quote" /></i>
          <h5>{item && item.name}</h5>
          <span>{item && item.designation}</span>
          <p>{item && item.review}</p>
          <StarRating stars={item.stars} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSlider;
