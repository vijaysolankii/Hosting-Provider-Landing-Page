import React from "react";
import ReviewSlider from "../components/ReviewSlider";
import Heading from "../components/Heading";

const Reviews = () => {
  const content = "What do our customer says?",
    longContent =
      "You will be surprised how our customers comment on what we do so well. because we really prioritize the satisfection of our customers";

  const data = [
    {
      name: "Slamet Wijaya",
      designation: "CEO Tokped",
      review:
        "Web hosting that i highly recommand because the service provided is very good, hosting is fast so with a pretty fantastic speed",
      stars: 2,
    },
    {
      name: "Slamet Wijaya",
      designation: "CEO Tokped",
      review:
        "Web hosting that i highly recommand because the service provided is very good, hosting is fast so with a pretty fantastic speed",
      stars: 5,
    },
    {
      name: "Slamet Wijaya",
      designation: "CEO Tokped",
      review:
        "Web hosting that i highly recommand because the service provided is very good, hosting is fast so with a pretty fantastic speed",
      stars: 5,
    },
    {
      name: "Slamet Wijaya",
      designation: "CEO Tokped",
      review:
        "Web hosting that i highly recommand because the service provided is very good, hosting is fast so with a pretty fantastic speed",
      stars: 5,
    },
    {
      name: "Slamet Wijaya",
      designation: "CEO Tokped",
      review:
        "Web hosting that i highly recommand because the service provided is very good, hosting is fast so with a pretty fantastic speed",
      stars: 5,
    },
  ];

  return (
    <section className="reviews">
      <div className="container">
        <Heading headContent={content} paragraphContent={longContent} />
        <ReviewSlider data={data} />
        {/* Need Define new data for the review slider and pass as props */}
      </div>
    </section>
  );
};

export default Reviews;
