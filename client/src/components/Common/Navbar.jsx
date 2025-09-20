import React, { useState } from "react";
import { FaBell,  FaQuestionCircle } from "react-icons/fa";


const Navbar = ({ user }) => {

  const navItems = [
    { id: "help", icon: <FaQuestionCircle size={20} />, label: "Help" },
    { id: "notifications", icon: <FaBell size={20} />, label: "Notifications" },
  ];

  return (
    <>
      {/* Navbar */}
      <div className="w-full p-4 h-[65px] relative bg-[#F0F5F9] border-b border-gray-300 text-black flex justify-end items-center px-4">
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="flex items-center gap-2 text-gray-900 hover:text-gray-600"
              onClick={() => {
                if (item.id === "help") alert("Help clicked");
                if (item.id === "notifications") alert("Notifications clicked");
              }}
            >
              {item.icon}
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
