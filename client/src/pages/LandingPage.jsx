import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center space-x-4">
        <Link to="/login">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-700 transition">
            Log In
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-6 py-3 bg-green-600 text-white rounded-2xl shadow-md hover:bg-green-700 transition">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
