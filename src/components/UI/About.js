import React from "react";

import logo from "../../images/logo/rabbit_marker.png";

const About = () => {
  return (
    <section className="hero bg-white min-h-screen py-8">
      <div className="hero-content flex items-center justify-center flex-col lg:flex-row gap-12 md:gap-16 text-pretty">
        <img
          src={logo}
          alt="Hungry Rabbit logo"
          className="w-full max-w-[10rem] md:max-w-[15rem]"
        />
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-5xl font-bold uppercase text-primary">
            about us
          </h1>
          <div className="space-y-6 py-6">
            <p className=" w-full max-w-lg font-light text-lg">
              Hungry Rabbit is a food search app that offers a variety of meals
              to choose from in your location. We are located across various
              cities in the United States. We take pride in ensuring that our
              customers enjoy the freshest meals. Even when they are delivered
              to your front door.
            </p>
            <p className=" w-full max-w-lg font-light text-lg">
              We're a team of developers and UI/UX designer from all over the
              world who love two things: eating and coding. We've worked
              tirelessly to bring this app to life, and we hope you enjoy using
              it as much as we enjoyed creating it. Bon appétit and happy
              searching!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
