import React from "react";

import About from "../UI/About";
import HowTo from "../UI/HowTo";
import Testimonials from "../UI/Testimonials";
import FilterState from "../Map/FilterState";
import Footer from "../UI/Footer";

const Home = () => {
  return (
    <div>
      <FilterState/>
      <About />
      <HowTo />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
