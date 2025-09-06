import React from "react";

interface SoilProps {
  ph: number;
  nitrogen: number; // ppm
  phosphorus: number; // ppm
  potassium: number; // ppm
  soilType: string;
}

const SoilInfo: React.FC<SoilProps> = ({ ph, nitrogen, phosphorus, potassium, soilType }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-4 text-center">Soil Information</h3>
      <ul className="text-gray-700 space-y-2">
        <li><strong>Soil Type:</strong> {soilType}</li>
        <li><strong>pH Level:</strong> {ph}</li>
        <li><strong>Nitrogen (N):</strong> {nitrogen} ppm</li>
        <li><strong>Phosphorus (P):</strong> {phosphorus} ppm</li>
        <li><strong>Potassium (K):</strong> {potassium} ppm</li>
      </ul>
    </div>
  );
};

export default SoilInfo;
