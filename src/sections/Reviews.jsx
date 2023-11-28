import React from "react";
import ReviewSlider from "../components/ReviewSlider";
import Heading from "../components/Heading";

const Reviews = () => {
  const content ="what do out customer says?",
  longContent='You will be surprised how our customers comment on what we do so well. because we really prioritize the satisfection of our customers'

  return (

    <section className="reviews">
      <div className="container">
        <Heading headContent={content} paragraphContent={longContent} />
        <ReviewSlider />
        {/* Need Define new data for the review slider and pass as props */}
      </div>
    </section>
  );
};

export default Reviews;
