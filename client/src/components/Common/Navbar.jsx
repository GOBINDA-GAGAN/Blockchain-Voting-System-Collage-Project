import React from "react";
import { FaBell, FaUserCircle, FaQuestionCircle } from "react-icons/fa";


const Navbar = ({ user, onLogout }) => {
  const navItems = [
    { id: "help", icon: <FaQuestionCircle />, label: "Help" },
    { id: "notifications", icon: <FaBell />, label: "Notifications" },
    {
      id: "profile",
      icon: user?.profilePic ? (
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
      ) : (
        <FaUserCircle />
      ),
      label: user?.name || "Profile",
    },
  ];

  return (
<div className="w-full p-4 h-[65px] bg-[#F0F5F9] border-b border-gray-300 text-black flex justify-end items-center px-4">
  {/* Right: Nav Items */}
  <div className="flex items-center gap-6">
    {navItems.map((item) => (
      <button
        key={item.id}
        className="flex items-center gap-2 text-gray-900 hover:text-gray-600"
        onClick={() => {
          if (item.id === "help") alert("Help clicked");
          if (item.id === "notifications") alert("Notifications clicked");
          if (item.id === "profile") onLogout?.();
        }}
      >
        {item.icon}
        <span className="hidden sm:inline">{item.label}</span>
      </button>
    ))}
  </div>
</div>

  );
};

export default Navbar;
