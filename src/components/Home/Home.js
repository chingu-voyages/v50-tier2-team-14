import React from "react";

import HeroHome from "../UI/HeroHome";
import About from "../UI/About";
import HowTo from "../UI/HowTo";
import Testimonials from "../UI/Testimonials";

const Home = ({ handleHeroButtonClick }) => {
  return (
    <div>
      <HeroHome handleHeroMenuButtonClick={handleHeroButtonClick} />
      <About />
      <HowTo />
      <Testimonials />
    </div>
  );
};

export default Home;
