import React, { useEffect, useRef } from "react";
import Swiper from "swiper/bundle";
import "../../node_modules/swiper/swiper-bundle.css";
import Logo from "../assets/images/Logo.svg";
import useIntersectionObserver from "../components/useIntersectionObserver";
const HeroSlider = () => {
  const swiperRef = useRef(null);
  const [ref, isVisible] = useIntersectionObserver();
  useEffect(() => {
    const mySwiper = new Swiper(swiperRef.current, {
      slidesPerView: "auto",
      speed: 8000,
      freeModeMomentum: false,
      autoplay: {
        delay: -1,
      },
      loop: true,
      allowTouchMove: false,
      disableOnInteraction: false,
      breakpoints: {
        320: {
          slidesPerView: 3.5,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        991: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        1440: {
          slidesPerView: 6,
          spaceBetween: 40,
        },
      },
    });

    return () => {
      mySwiper.destroy(true, true);
    };
  }, []);

  return (
    <section className={`heroSlider ${isVisible ? "visible" : ""}`} ref={ref}>
      <div className="overflow-hidden">
        <div ref={swiperRef} className="swiper-container">
          <div className="swiper-wrapper oWrap">
            <div className="swiper-slide">
              <figure>
                <img src={Logo} alt="Logo Item" />
              </figure>
            </div>
            <div className="swiper-slide">
              <figure>
                <img src={Logo} alt="Logo Item" />
              </figure>
            </div>
            <div className="swiper-slide">
              <figure>
                <img src={Logo} alt="Logo Item" />
              </figure>
            </div>
            <div className="swiper-slide">
              <figure>
                <img src={Logo} alt="Logo Item" />
              </figure>
            </div>
            <div className="swiper-slide">
              <figure>
                <img src={Logo} alt="Logo Item" />
              </figure>
            </div>
            <div className="swiper-slide">
              <figure>
                <img src={Logo} alt="Logo Item" />
              </figure>
            </div>
            <div className="swiper-slide">
              <figure>
                <img src={Logo} alt="Logo Item" />
              </figure>
            </div>
            <div className="swiper-slide">
              <figure>
                <img src={Logo} alt="Logo Item" />
              </figure>
            </div>
            <div className="swiper-slide">
              <figure>
                <img src={Logo} alt="Logo Item" />
              </figure>
            </div>
            <div className="swiper-slide">
              <figure>
                <img src={Logo} alt="Logo Item" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
