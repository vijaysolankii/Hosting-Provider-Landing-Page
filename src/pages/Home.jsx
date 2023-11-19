import React from "react";
import Header from "../utilities/Header";
import HeroBanner from "../sections/HeroBanner";
import HeroSlider from "../sections/HeroSlider";

const Home = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <HeroSlider />
    </>
  );
};

export default Home;