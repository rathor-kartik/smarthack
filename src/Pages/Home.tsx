import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import CropCard from "../Components/CropCard";
// import CropPieChart from "../Components/PieCharts";
import SoilInfo from "../Components/SoilInfo";
import WeatherFinder from "../Components/WeatherFinder";

const Home: React.FC = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Our Solution?
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition">
            <h3 className="text-2xl font-semibold mb-4">
              Crop Recommendations
            </h3>
            <p>
              Get suggestions for the most profitable crops for your soil type
              and region.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition">
            <h3 className="text-2xl font-semibold mb-4">Detailed Insights</h3>
            <p>
              Access growth guides, market trends, and tips to maximize your
              yield.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition">
            <h3 className="text-2xl font-semibold mb-4">Profit Analysis</h3>
            <p>
              Know the expected profits for each crop and plan your farming
              season efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-6 bg-green-100">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        <div className="max-w-4xl mx-auto text-center text-gray-700 space-y-6">
          <p>
            FarmWise is dedicated to empowering farmers with smart, data-driven
            solutions. We help you choose the best crops for your soil, provide
            detailed growth insights, and analyze profits so you can make
            informed decisions.
          </p>
          <p>
            Our mission is to make farming profitable, sustainable, and
            stress-free. We combine technology with expert knowledge to ensure
            every farmer has access to the right information at the right time.
          </p>
          <p>
            Join us and take your farming to the next level with FarmWise – your
            one-stop solution for smart agriculture.
          </p>
        </div>
      </section>
      <section id="crops" className="py-20 px-6 bg-green-50">
        <h2 className="text-4xl font-bold text-center mb-12">
          Crop Success Rate Predictions
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {cropsData.map((crop) => (
            <CropCard
              key={crop.name}
              name={crop.name}
              successRate={crop.successRate}
              description={crop.description}
            />
          ))}
        </div>
      </section>

      <section id="insights" className="py-20 px-6 bg-green-50">
        <h2 className="text-4xl font-bold text-center mb-12">
          Insights & Analytics
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {/* <CropPieChart /> */}
          <SoilInfo
            ph={6.5}
            nitrogen={40}
            phosphorus={30}
            potassium={50}
            soilType="Loamy"
          />
          <WeatherFinder />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Boost Your Farming?
        </h2>
        <p className="mb-6 max-w-xl mx-auto">
          Start using our platform to find the best crops and get actionable
          insights.
        </p>
        <a
          href="/get-started"
          className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition"
        >
          Get Started
        </a>
      </section>

      <Footer />
    </div>
  );
};

// dataset
const cropsData = [
  {
    name: "Wheat",
    successRate: 85,
    description: "Wheat is highly suitable for your soil type and climate.",
  },
  {
    name: "Rice",
    successRate: 70,
    description: "Rice grows well with proper water management.",
  },
  {
    name: "Corn",
    successRate: 90,
    description: "Corn is predicted to give high yields this season.",
  },
  {
    name: "Tomatoes",
    successRate: 60,
    description: "Tomatoes require careful monitoring for pests and moisture.",
  },
  {
    name: "Soybeans",
    successRate: 75,
    description: "Soybeans are moderately suitable and profitable.",
  },
  {
    name: "Potatoes",
    successRate: 80,
    description:
      "Potatoes thrive in well-drained soil with balanced nutrients.",
  },
];

export default Home;
