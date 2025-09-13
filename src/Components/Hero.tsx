import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-green-100 py-20 px-6 text-center">
      <h1 className="text-5xl font-bold mb-4 text-green-900">
        Welcome to Kissan Sarthi 
      </h1>
      <h1 className="text-5xl font-bold mb-4 text-green-900">
        Your Trusted Companion for Smarter Farming!
      </h1>
      <p className="text-lg max-w-2xl mx-auto mb-6">
        At Kissan Sarthi, our mission is to empower farmers by providing easy access to vital agricultural information and intelligent decision-making tools. We understand the challenges faced by farmers today – unpredictable weather, soil health management, pest attacks, and yield optimization.
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
