import React from "react";
import Header from "../utilities/Header";
import HeroBanner from "../sections/HeroBanner";
import HeroSlider from "../sections/HeroSlider";
import Services from "../sections/Services";

const Home = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <HeroSlider />
      <Services />
    </>
  );
};

export default Home;