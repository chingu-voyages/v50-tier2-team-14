import React from "react";

const Testimonials = () => {
  return (
    <section className="hero bg-white min-h-screen flex flex-col justify-center items-center py-8">
      <h1 className="text-4xl font-bold uppercase text-primary">
        testimonials
      </h1>
      <div className="hero-content flex-col lg:flex-row gap-6">
        <div className="grid md:grid-cols-3 h-full w-full gap-6">
          <div className="card bg-white w-full shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://randomuser.me/api/portraits/women/56.jpg"
                alt="Rebecca Santos headshot"
                className="rounded-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Rebecca Santos</h2>
              <p className="font-light">
                "I've tried numerous food delivery services, but none compare to
                Hungry Rabbit. The quality of the ingredients and the freshness
                of the dishes are unmatched. Every bite is a testament to the
                care and passion put into each order. Highly recommend!"
              </p>
              <div className="card-actions">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-white w-full shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://randomuser.me/api/portraits/women/95.jpg"
                alt="Tiffany Johnson headshot"
                className="rounded-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Tiffany Johnson</h2>
              <p className="font-light">
                Your service goes above and beyond what I expected from a food
                delivery service. Not only do you offer a wide variety of
                cuisines, but the speed of delivery and the packaging are
                top-notch. It feels like someone personally curated my meal.
                Thank you for making my busy days taste better!
              </p>
              <div className="card-actions">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-white w-full shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://randomuser.me/api/portraits/women/90.jpg"
                alt="Makayla Romano headshot"
                className="rounded-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Makayla Romano</h2>
              <p className="font-light">
                Switched to your service after hearing rave reviews, and I'm
                sold! The flavors are intense, and the portion sizes are
                generous. It's clear that the chefs take pride in their craft.
                Plus, the convenience of having such high-quality meals
                delivered to my doorstep is unbeatable. Can't wait for my next
                order!
              </p>
              <div className="card-actions">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
