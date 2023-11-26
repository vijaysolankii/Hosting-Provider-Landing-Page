import React from "react";
import Header from "../utilities/Header";
import HeroBanner from "../sections/HeroBanner";
import HeroSlider from "../sections/HeroSlider";
import Services from "../sections/Services";
import Support from "../sections/Support";
import Pricing from "../sections/Pricing";

const Home = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <HeroSlider />
      <Services />
      <Support />
      <Pricing />
    </>
  );
};

export default Home;