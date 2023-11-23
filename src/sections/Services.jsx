import React from "react";
import Heading from "../components/Heading";

import ServiceHeart from "../assets/images/ServiceHeart.svg";
import ServiceSignal from "../assets/images/ServiceSignal.svg";
import ServiceFast from "../assets/images/ServicesFast.svg";

const data = [
  {
    img: ServiceHeart,
    heading: "Faster hosting process",
    paragraph:
      "We can speed the creation of your webiste. which is made directly by the experts",
  },
  {
    img: ServiceSignal,
    heading: "Speed to access faster",
    paragraph:
      "Excellent network infrastructure and hardware to support fast and stable access.",
  },
  {
    img: ServiceFast,
    heading: "faster service 24/7",
    paragraph:
      "We have a response time of less than 150 seconds, available 24 hours a day.",
  },
];

const Services = () => {
  const headingText = "The best service especially for you";
  const paragraphText =
    "We will serve you beset we can with aim of providing satisfection to you.";

  return (
    <section className="services">
      <div className="container">
        <div className="text-center">
          <Heading headContent={headingText} paragraphContent={paragraphText} />
        </div>
        <div className="servicesCardWrapper">
          {data.map((item, index) => (
            <div key={index} className="services-card">
              <i>
                <img src={item.img} alt={"services-icons"} />
              </i>
              <div className="services-card__content">
                <h3>{item.heading}</h3>
                <p>{item.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
