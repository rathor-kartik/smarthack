// import React, { useState, useEffect, useRef } from "react";
// import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
// import {
//   MainContainer,
//   ChatContainer,
//   MessageList,
//   Message,
//   MessageInput,
// } from "@chatscope/chat-ui-kit-react";
// import Draggable from "react-draggable";
// import botIcon from "/crop_image/Bot.jpeg"; // ✅ removed stray c

// // ====================
// // Load Crop JSON dynamically (Type assertion)
// // ====================
// import cropDataJson from "../Data/Crop_Data_2015_2020.json";

// // --------------------
// // Types
// // --------------------
// interface CropData {
//   State_Name: string;
//   District_Name: string;
//   Season: string;
//   Crop_Year: number;
//   Crop: string;
//   yield: number;
// }

// interface MessageItem {
//   sender: "bot" | "user";
//   message: string;
// }

// interface ParsedInput {
//   state: string;
//   district: string;
//   season: string;
//   year: string;
// }

// // --------------------
// // Component
// // --------------------
// const Chatbot: React.FC = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [messages, setMessages] = useState<MessageItem[]>([]);
//   const chatbotRef = useRef<HTMLDivElement | null>(null);

//   // Normalize helper
//   const normalize = (str: string): string =>
//     str ? str.toString().trim().toLowerCase().replace(/\s+/g, " ") : "";

//   // Greeting message on open
//   useEffect(() => {
//     setIsOpen(true);
//     setMessages([
//       {
//         sender: "bot",
//         message:
//           "👋 Hi! I’m your Crop Advisor.\n👉 You can ask like:\n- `Madhya Pradesh,Gwalior,Rabi,2015`\n- `Show me Madhya Pradesh Gwalior Rabi 2015 crops`\n- `Hey Chatbot Provide me Kharif crops of Madhya pradesh Bhind 2017 data`",
//       },
//     ]);
//   }, []);

//   // Close chatbot on outside click
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         chatbotRef.current &&
//         !chatbotRef.current.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Toggle manually
//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

//   // ========================
//   // Improved NLP Parsing
//   // ========================
//   const parseInput = (text: string): ParsedInput | null => {
//     const clean = text.toLowerCase().trim();

//     // Match season + year
//     const seasonRegex = /(kharif|rabi|summer|whole year|winter|autumn)/i;
//     const yearRegex = /\b(20\d{2}|19\d{2})\b/;

//     const seasonMatch = clean.match(seasonRegex);
//     const yearMatch = clean.match(yearRegex);

//     const season = seasonMatch ? normalize(seasonMatch[1]) : null;
//     const year = yearMatch ? yearMatch[1] : null;

//     // Extract state & district from dataset
//     let state: string | null = null;
//     let district: string | null = null;

//     (cropDataJson as CropData[]).forEach((item) => {
//       if (!state && clean.includes(item.State_Name.toLowerCase())) {
//         state = normalize(item.State_Name);
//       }
//       if (!district && clean.includes(item.District_Name.toLowerCase())) {
//         district = normalize(item.District_Name);
//       }
//     });

//     if (state && district && season && year) {
//       return { state, district, season, year };
//     }
//     return null;
//   };

//   // Handle message send
//   const handleSend = async (text: string) => {
//     setMessages((prev) => [...prev, { sender: "user", message: text }]);

//     const parsed = parseInput(text);
//     if (!parsed) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: "bot",
//           message:
//             "😕 I couldn’t understand your request.\n👉 Try like:\n- `Madhya Pradesh, Gwalior, Rabi, 2015`\n- `Show me Madhya Pradesh Gwalior Rabi 2015 crops`\n- `Hey Chatbot Provide me Kharif crops of Madhya pradesh Bhind 2017 data`",
//         },
//       ]);
//       return;
//     }

//     const { state, district, season, year } = parsed;

//     // Search crops dynamically in JSON
//     const crops = (cropDataJson as CropData[]).filter(
//       (item) =>
//         normalize(item.State_Name) === state &&
//         normalize(item.District_Name) === district &&
//         normalize(item.Season) === season &&
//         String(item.Crop_Year) === year
//     );

//     if (crops.length > 0) {
//       let recText = `🌱 Recommended crops for **${district}, ${state} (${season} ${year})**:\n\n`;
//       crops.forEach((c) => {
//         recText += `• ${c.Crop} → avg yield: ${c.yield.toFixed(2)}\n`;
//       });

//       setMessages((prev) => [...prev, { sender: "bot", message: recText }]);
//     } else {
//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: "bot",
//           message: `⚠️ Sorry, no crop data found for **${district}, ${state} (${season} ${year})**.\n👉 Try another district, season, or year.`,
//         },
//       ]);
//     }
//   };

//   return (
//     <Draggable>
//       <div
//         ref={chatbotRef}
//         style={{
//           position: "fixed",
//           bottom: "20px",
//           right: "20px",
//           zIndex: 1001,
//         }}
//       >
//         {/* Floating button */}
//         <button
//           onClick={toggleChat}
//           style={{
//             background: "transparent",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           <img
//             src={botIcon}
//             alt="Chatbot"
//             style={{ width: "60px", height: "60px" }}
//           />
//         </button>

//         {/* Chat Window */}
//         {isOpen && (
//           <div
//             style={{
//               marginTop: "10px",
//               width: "420px",
//               height: "580px",
//               borderRadius: "15px",
//               overflow: "hidden",
//               boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
//               background: "white",
//             }}
//           >
//             <MainContainer>
//               <ChatContainer>
//                 <MessageList>
//                   {messages.map((msg, idx) => (
//                     <Message
//                       key={idx}
//                       model={{
//                         message: msg.message,
//                         sender: msg.sender,
//                         direction:
//                           msg.sender === "user" ? "outgoing" : "incoming",
//                         position: "single", // ✅ added
//                       }}
//                     />
//                   ))}
//                 </MessageList>

//                 <MessageInput
//                   placeholder="Ask about crops (State, District, Season, Year)"
//                   onSend={handleSend}
//                 />
//               </ChatContainer>
//             </MainContainer>
//           </div>
//         )}
//       </div>
//     </Draggable>
//   );
// };

// export default Chatbot;
