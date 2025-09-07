import React from "react";
import CropCard from "../Components/CropCard";
import cropsData from "../Data/cropdata.json";
import Navbar from "../Components/Navbar";

const Crops: React.FC = () => {
  return (
    <div className="bg-green-50 min-h-screen">
        <Navbar/>
      <div className="py-20 px-6 bg-green-50 min-h-screen">
        <h2 className="text-4xl font-bold text-center mb-12">
          Available Crops
        </h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cropsData.map((crop, index) => (
          <CropCard key={index} {...crop} />
        ))}
      </div>
      </div>
      
    </div>
  );
};

// const Crops: React.FC = () => {
//   const crops = [
//     {
//       name: "Wheat",
//       successRate: 85,
//       description: "Wheat grows well in loamy soil with moderate rainfall.",
//       image: "https://source.unsplash.com/400x300/?wheat,field",
//     },
//     {
//       name: "Rice",
//       successRate: 78,
//       description: "Rice requires clayey soil and high water supply.",
//       image: "https://source.unsplash.com/400x300/?rice,field",
//     },
//     {
//       name: "Corn",
//       successRate: 90,
//       description: "Corn grows best in well-drained fertile soil.",
//       image: "https://source.unsplash.com/400x300/?corn,field",
//     },
//     {
//       name: "Tomatoes",
//       successRate: 70,
//       description: "Tomatoes need fertile soil and plenty of sunlight.",
//       image: "https://source.unsplash.com/400x300/?tomato,plants",
//     },
//   ];

//   return (
//     <div className="py-20 px-6 bg-green-50 min-h-screen">
//       <h2 className="text-4xl font-bold text-center mb-12">Available Crops</h2>
//       <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {crops.map((crop, index) => (
//           <CropCard key={index} {...crop} />
//         ))}
//       </div>
//     </div>
//   );
// };

export default Crops;
