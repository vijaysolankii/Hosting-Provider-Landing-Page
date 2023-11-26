import React from "react";
import Heading from "../components/Heading";

import ArrowLeft from "../assets/images/hosting-arrow-left.svg";
import ArrowRight from "../assets/images/hosting-arrow-right.svg";

const Pricing = () => {
  const tick = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM14.78 7.7L9.11 13.37C8.97 13.51 8.78 13.59 8.58 13.59C8.38 13.59 8.19 13.51 8.05 13.37L5.22 10.54C4.93 10.25 4.93 9.77 5.22 9.48C5.51 9.19 5.99 9.19 6.28 9.48L8.58 11.78L13.72 6.64C14.01 6.35 14.49 6.35 14.78 6.64C15.07 6.93 15.07 7.4 14.78 7.7Z" fill="#0C8BFD"/>
    </svg>;

  const data = [
    {
      title: "regular",
      price: "8.9",
      info: "Suitable for you who will build a website and others.",
      banefits: [
        "Up to 16K visitors/month",
        "500mb SSD disk space",
        "Unlimited Bandwidth",
        "Unlimited Databases",
        "Instant Backup",
        "1 Email account",
        "1 Domain",
      ],
    },
    {
      title: "Standard",
      price: "12.98",
      info: "Suitable for buisness, such as a website or management system for complaints.",
      banefits: [
        "Up to 36K visitors/month",
        "Unlimited SSD disk space",
        "Unlimited Bandwidth",
        "Unlimited Databases",
        "Instant Backup",
        "Unlimited Email account",
        "Unlimited Domain",
      ],
    },
    {
      title: "Premium",
      price: "19.99",
      info: "Suitable for those of you who need special physical server performance and security.",
      banefits: [
        "Up to 200K visitors/month",
        "Unlimited SSD disk space",
        "Unlimited Bandwidth",
        "Unlimited Databases",
        "Instant Backup",
        "Unlimited Email account",
        "Unlimited Domain",
      ],
    },
  ];

  const headerContent = "Hosting your website with the services we provide";
  return (
    <section className="pricing">
      <div className="container">
        <div className="pricing-heading">
          <span className="left-arrow">
            <img src={ArrowLeft} alt="ArrowLeft" />
          </span>
          <Heading headContent={headerContent} />
          <span className="right-arrow">
            <img src={ArrowRight} alt="ArrowRight" />
          </span>
        </div>
        <div className="pricing-list">
          {data.map((item, _) => (
            <div key={_} className="pricing-list-item">
              <div className="pricing-list-item__heading">
                <h4>{item.title}</h4>
                <span className="pricing">
                  ${item.price}
                  <strong>/month</strong>
                </span>
                <p>{item.info}</p>
              </div>
              <div className="pricing-list-item__content">
                <ul>
                  {item.banefits.map((subItem, _) => (
                    <li key={_}>
                      <span>{tick}</span>
                      {subItem}
                    </li>
                  ))}
                </ul>
                <a href="" className="btn">Select</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
