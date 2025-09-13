import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Crops from "./Pages/Crops";
import Insights from "./Pages/Insight";
import Chatbot from "./Components/Chatbot";

const App: React.FC = () => {
  return (
    <Routes>
      {/* <Chatbot/> */}
      <Route path="/" element={<Home />} />
      <Route path='/crops' element ={<Crops/>}/>
      <Route path="/insights" element={<Insights/>} />
	   <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
