import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const user = localStorage.getItem("user"); // mock auth

  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold"><Link to="/" className="hover:text-gray-200">
          Farmwise
        </Link></div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-200">
          Home
        </Link>
        <Link to="/crops" className="hover:text-gray-200">
          Crops
        </Link>
        <Link to="/insights" className="hover:text-gray-200">
          Insights
        </Link>
        {!user ? (
          <>
            <Link to="/login" className="hover:text-gray-200">
              Login
            </Link>
            <Link to="/signup" className="hover:text-gray-200">
              Sign Up
            </Link>
          </>
        ) : (
          <span
            className="hover:text-gray-200 cursor-pointer"
            onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "/";
            }}
          >
            Logout
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
