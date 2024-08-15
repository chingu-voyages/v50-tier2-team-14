import React from "react";

import logo from "../../images/logo/rabbit_logo_1.png";

const HowTo = () => {
  return (
    <section className="hero bg-neutral min-h-screen flex flex-col justify-center items-center py-12">
      <h1 className="text-2xl md:text-5xl font-bold uppercase text-primary">
        how to place an order?
      </h1>
      <div className="hero-content flex-col lg:flex-row gap-8 pt-12">
        <article className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1 bg-white">
              <img
                src={logo}
                alt="Hungry Rabbit logo"
                className="w-full max-w-[10rem] md:max-w-[15rem]"
              />
            </div>
          </div>
        </article>
        <article className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-3 justify-center items-center">
            <h3 className="font-bold text-2xl">Step 1</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-10"
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
            <p className="font-light text-lg">"Select your location"</p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <h3 className="font-bold text-2xl">Step 2</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
              />
            </svg>
            <p className="font-light text-lg">"Select your food category"</p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <h3 className="font-bold text-2xl">Step 3</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            <p className="font-light text-lg">"Select a restaurant"</p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <h3 className="font-bold text-2xl">Step 4</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-moped"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M5 16v1a2 2 0 0 0 4 0v-5h-3a3 3 0 0 0 -3 3v1h10a6 6 0 0 1 5 -4v-5a2 2 0 0 0 -2 -2h-1" />
              <path d="M6 9l3 0" />
            </svg>
            <p className="font-light text-lg">"Place your order"</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default HowTo;
