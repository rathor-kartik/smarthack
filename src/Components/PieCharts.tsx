// import React from "react";
// import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// interface PieData {
//   name: string;
//   value: number;
// }

// const data: PieData[] = [
//   { name: "Wheat", value: 85 },
//   { name: "Rice", value: 70 },
//   { name: "Corn", value: 90 },
//   { name: "Tomatoes", value: 60 },
//   { name: "Soybeans", value: 75 },
//   { name: "Potatoes", value: 80 },
// ];

// const COLORS = ["#4ade80", "#22c55e", "#16a34a", "#facc15", "#f97316", "#ef4444"];

// const CropPieChart: React.FC = () => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <h3 className="text-2xl font-semibold mb-4 text-center">Crop Success Distribution</h3>
//       <PieChart width={300} height={300}>
//         <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Tooltip />
//         <Legend verticalAlign="bottom" height={36} />
//       </PieChart>
//     </div>
//   );
// };

// export default CropPieChart;
