import React from "react";
import Header from "../utilities/Header";
import HeroBanner from "../sections/HeroBanner";
import HeroSlider from "../sections/HeroSlider";
import Services from "../sections/Services";
import Support from "../sections/Support";

const Home = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <HeroSlider />
      <Services />
      <Support />
    </>
  );
};

export default Home;