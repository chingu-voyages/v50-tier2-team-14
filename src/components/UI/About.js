import React from "react";

import logo from "../../images/logo/rabbit_marker.png";

const About = () => {
  return (
    <section className="hero bg-white min-h-screen py-8">
      <div className="hero-content flex-col lg:flex-row gap-6">
        <img src={logo} className="w-full max-w-sm md:max-w-lg" />
        <div>
          <h1 className="text-5xl font-bold uppercase text-primary">
            about us
          </h1>
          <div className="space-y-6 py-6">
            <p className=" w-full max-w-lg font-light text-lg">
              Hungry Bunny is an all-you-can-eat cafe that offers a variety of
              meals to choose from. We are located across various cities in the
              United States.
            </p>
            <p className=" w-full max-w-lg font-light text-lg">
              We take pride in ensuring that our customers enjoy the freshest
              meals. Even when they are delivered to your front door.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
