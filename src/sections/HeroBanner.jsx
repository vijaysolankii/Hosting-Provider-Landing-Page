import React from "react";
import Button from "../components/Button";
import BannerImg from "../assets/images/bannerImg.svg";
import useIntersectionObserver from '../components/useIntersectionObserver'

const HeroBanner = () => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <section className={`banner ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="container">
        <div className="banner-wrap">
          <div className="banner-content">
            <h1>
              The best and <i>chepest</i> hosting for your website
            </h1>
            <p>
              Hosting your website here is easy. access it fast, server security
              is very well maintained. and of course supported by reliable
              servers.
            </p>
            <div className="btnWrap">
              <Button text="Get Started" classes="btn-primary" />
              <Button text="Try Start free" classes="btn-secondary" />
            </div>
          </div>
          <div className="banner-img">
            <figure>
              <img src={BannerImg} alt="BannerImg" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
