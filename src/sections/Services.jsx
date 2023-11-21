import React from "react";
import Heading from "../components/Heading";


import {ServiceHeart} from "../assets/images/ServiceHeart.svg";
// import {ServiceSignal} from "../assets/images/ServiceSignal.svg";
// import {ServiceFast} from "../assets/images/ServiceFast.svg";

const Services = () => {
    const headingText = 'The best service especially for you'
    const paragraphText = 'We will serve you beset we can with aim of providing satisfection to you.'

    return (
    <section className="services">
      <div className="container">
        <Heading headContent={headingText} paragraphContent={paragraphText} />
        <div className="flex gap-x-5">
          <div className="services-card lg:w-[33.33%] md:w-[50%] w-full">
            <i>
              <img src={ServiceHeart} alt="serviceHeart" />
            </i>
            <div className="services-card__content">
              <h3 className="text-3xl"></h3>
              <p></p>
            </div>
          </div>
          <div className="services-card lg:w-[33.33%] md:w-[50%] w-full">
            <i>
              {/* <img src={ServiceSignal} alt="serviceSignal" /> */}
            </i>
            <div className="services-card__content">
              <h3 className="text-3xl"></h3>
              <p></p>
            </div>
          </div>
          <div className="services-card lg:w-[33.33%] md:w-[50%] w-full">
            <i>
              {/* <img src={ServiceFast} alt="serviceFast" /> */}
            </i>
            <div className="services-card__content">
              <h3 className="text-3xl"></h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
