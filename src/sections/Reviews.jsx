import React from "react";
import ReviewSlider from "../components/ReviewSlider";
import Heading from "../components/Heading";

const Reviews = () => {
  const content ="what do out customer says?"
  return (

    <section className="reviews">
      <div className="container">
        <Heading headContent={content} />
        <ReviewSlider />
      </div>
    </section>
  );
};

export default Reviews;
