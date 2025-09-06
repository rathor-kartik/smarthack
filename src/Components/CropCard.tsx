import React, { useEffect, useState } from "react";

interface CropCardProps {
  name: string;
  successRate: number; // percentage 0-100
  description: string;
}

const CropCard: React.FC<CropCardProps> = ({ name, successRate, description }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setWidth(successRate), 200); // animate on mount
    return () => clearTimeout(timeout);
  }, [successRate]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition">
      <h3 className="text-2xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-green-600 h-4 rounded-full text-right text-white text-xs font-semibold transition-all duration-1000"
          style={{ width: `${width}%` }}
        >
          {width}%
        </div>
      </div>
    </div>
  );
};

export default CropCard;
