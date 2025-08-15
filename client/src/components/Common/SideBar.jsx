import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaVoteYea,
  FaUsers,
  FaBullhorn,
  FaUserEdit,
  FaCalendarAlt,
  FaListUl,
  FaChartBar,
  FaUserTie,
  FaTools,
} from "react-icons/fa";
import Logo from "/Logo.png";

const menuConfig = {
  user: [
    { label: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { label: "Cast Vote", icon: <FaVoteYea />, path: "/vote" },
    { label: "Candidate List", icon: <FaListUl />, path: "/candidates" },
    { label: "My Vote History", icon: <FaChartBar />, path: "/history" },
    { label: "Announcements", icon: <FaBullhorn />, path: "/announcements" },
    { label: "Profile Settings", icon: <FaUserEdit />, path: "/settings" },
  ],
 candidate: [
  { label: "Dashboard", icon: <FaHome />, path: "/dashboard" },
  { label: "Cast Vote", icon: <FaVoteYea />, path: "/vote" },
  { label: "Apply for Candidate", icon: <FaUserTie />, path: "/apply-candidate" },
  { label: "Candidate List", icon: <FaListUl />, path: "/candidates" },
  { label: "My Vote History", icon: <FaChartBar />, path: "/history" },
  { label: "My Profile", icon: <FaUserEdit />, path: "/my-profile" },
  { label: "Election Results", icon: <FaChartBar />, path: "/results" },
  { label: "Announcements", icon: <FaBullhorn />, path: "/announcements" },
  { label: "Profile Settings", icon: <FaUserEdit />, path: "/settings" },
],
  admin: [
    { label: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { label: "Cast Vote", icon: <FaVoteYea />, path: "/vote" },
    { label: "Candidate List", icon: <FaListUl />, path: "/candidates" },
    { label: "My Vote History", icon: <FaChartBar />, path: "/history" },
     { label: "My Profile", icon: <FaUserEdit />, path: "/my-profile" },
    { label: "Election Results", icon: <FaChartBar />, path: "/results" },
    { label: "Manage Users", icon: <FaUsers />, path: "/users" },
    {
      label: "Manage Candidates",
      icon: <FaUserTie />,
      path: "/manage-candidates",
    },
    { label: "Manage Elections", icon: <FaCalendarAlt />, path: "/elections" },
    { label: "View Results", icon: <FaChartBar />, path: "/results" },
    { label: "Announcements", icon: <FaBullhorn />, path: "/announcements" },
    { label: "Profile Settings", icon: <FaUserEdit />, path: "/settings" },
    { label: "System Settings", icon: <FaTools />, path: "/system" },
  ],
};

const Sidebar = ({ userRole }) => {
  const menuItems = menuConfig[userRole] || [];

  return (
    <div className="h-full w-64 bg-[#F0F5F9] text-black flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center  border-b border-gray-300">
        <img
          src={Logo}
          alt="Government of India Logo"
          className="h-16 w-auto object-contain"
        />
        <span className="text-xs font-bold text-gray-800 tracking-wide">
          GOVERNMENT OF INDIA
        </span>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-2 space-y-1 overflow-y-auto text-sm border-r border-gray-300">
        {menuItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-800 hover:text-white transition"
          >
            <span className="text-base">{item.icon}</span>
            <span className="truncate">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-3 border-r border-t  border-gray-300">
        <button className="w-full bg-red-500 hover:bg-red-600 px-3 py-1.5 text-sm rounded-md">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
