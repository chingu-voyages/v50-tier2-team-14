import React from "react";

import logo from "../../images/logo/rabbit_marker.png";

const HeroHome = () => {
  return (
    <div className="hero bg-neutral min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-6">
        <img src={logo} className="w-full max-w-lg" />
        <div>
          <h1 className="text-5xl font-bold uppercase text-primary">
            hungry rabbit
          </h1>
          <p className="py-6 w-full max-w-lg font-light text-lg">
            Offering a diverse menu that includes a vaiety of cuisines like
            pizza, burgers, BBQ, and delicious desserts.
          </p>
          <label className="input input-bordered flex items-center gap-2 max-w-xs bg-white pl-3 pr-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 opacity-60"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <input
              type="text"
              className="grow"
              placeholder="Enter city or zip code"
            />
            <button className="bg-gray-300 overflow-hidden h-full p-4 inline-flex justify-center items-center group hover:bg-gray-200 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 opacity-60 group-hover:scale-125 transition-transform duration-300"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
