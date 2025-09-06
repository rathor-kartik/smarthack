import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-green-100 py-20 px-6 text-center">
      <h1 className="text-5xl font-bold mb-4 text-green-900">
        Grow Smart, Grow Profitable
      </h1>
      <p className="text-lg max-w-2xl mx-auto mb-6">
        Helping farmers choose the most profitable crops and providing
        insights to maximize yield and profit. Your one-stop solution for smart farming.
      </p>
      <a
        href="#features"
        className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition"
      >
        Learn More
      </a>
    </section>
  );
};

export default Hero;
