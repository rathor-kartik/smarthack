import React from "react";
import CropPieChart from "../Components/PieCharts";
import SoilInfo from "../Components/SoilInfo";
import WeatherFinder from "../Components/WeatherFinder";
import ProfitChart from "../Components/ProfitChart";
import TipsCard from "../Components/TipsCard";
import Navbar from "../Components/Navbar";

const Insights: React.FC = () => {
  return (
    <div className="bg-green-50 min-h-screen">
        <Navbar/>
      <div className="py-20 px-6 bg-green-50 min-h-screen">
        <h2 className="text-4xl font-bold text-center mb-12">
          Farm Insights Dashboard
        </h2>

        <div className="grid gap-10 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-3">
          <CropPieChart />
          <SoilInfo
            ph={6.5}
            nitrogen={40}
            phosphorus={30}
            potassium={50}
            soilType="Loamy"
          />
          <WeatherFinder />
          <ProfitChart />
          <TipsCard
            tips={[
              "Use drip irrigation to save water",
              "Rotate crops to maintain soil fertility",
              "Apply compost for better yield",
              "Check weather forecast before sowing",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Insights;
