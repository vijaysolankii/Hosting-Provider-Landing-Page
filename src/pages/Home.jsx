import React from "react";
import Header from "../utilities/Header";
import HeroBanner from "../sections/HeroBanner";
import HeroSlider from "../sections/HeroSlider";
import Services from "../sections/Services";
import Support from "../sections/Support";
import Pricing from "../sections/Pricing";
import Reviews from "../sections/Reviews";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <HeroSlider />
      <Services />
      <Support />
      <Pricing />
      <Reviews />
      <Contact />
    </>
  );
};

export default Home;