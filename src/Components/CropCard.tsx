import React from "react";
import { Leaf, TrendingUp } from "lucide-react";

interface Crop {
  name: string;
  successRate: number;
  description: string;
  image: string;
}

const CropCard: React.FC<Crop> = ({ name, successRate, description, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
          {successRate}% Success
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Leaf className="text-green-600 w-5 h-5" />
          {name}
        </h3>
        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
          {description}
        </p>

        {/* Footer Section */}
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center text-green-700 font-semibold">
            <TrendingUp className="w-5 h-5 mr-1" />
            Profitable
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CropCard;
