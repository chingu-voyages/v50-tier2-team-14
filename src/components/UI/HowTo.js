import React from "react";

const HowTo = () => {
  return (
    <section className="hero bg-neutral min-h-screen">
      <h1 className="text-3xl font-bold uppercase text-primary text-center">
        how to place an order
      </h1>
      <div className="hero-content flex-col lg:flex-row gap-6">
        <article className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">Hi.</div>
          </div>
        </article>
        <article>other content</article>
      </div>
    </section>
  );
};

export default HowTo;
