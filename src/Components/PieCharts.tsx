import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import cropsData from "../Data/cropdata.json";

const COLORS = ["#16a34a", "#facc15", "#3b82f6", "#ef4444", "#a855f7", "#f97316"];

const CropPieChart: React.FC = () => {
  // Map crops.json → chart-friendly data
  const chartData = cropsData.map((crop) => ({
    name: crop.name,
    value: crop.successRate,
  }));

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
      <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
        🌱 Crop Success Rate Distribution
      </h2>
      <div className="w-full h-80">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name }) =>
                `${name} `
              }
              outerRadius={120}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                  stroke="#fff"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
              }}
            />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CropPieChart;
