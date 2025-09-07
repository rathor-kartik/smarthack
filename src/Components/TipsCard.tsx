import React from "react";

interface TipsCardProps {
  tips: string[];
}

const TipsCard: React.FC<TipsCardProps> = ({ tips }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-4 text-center">Farmer Tips</h3>
      <ul className="space-y-3 text-gray-700">
        {tips.map((tip, index) => (
          <li
            key={index}
            className="flex items-start bg-green-50 p-3 rounded-lg border-l-4 border-green-600"
          >
            <span className="font-bold text-green-700 mr-2">✓</span>
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TipsCard;
