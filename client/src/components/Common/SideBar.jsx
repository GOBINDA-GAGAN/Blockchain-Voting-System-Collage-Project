import React, { useContext } from "react";
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
import { AuthContext } from "../../context/AuthContext"; // ✅ import context
import { Shield } from "lucide-react";

const menuConfig = {
  user: [
    { label: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { label: "Cast Vote", icon: <FaVoteYea />, path: "/vote" },
    { label: "Candidate List", icon: <FaListUl />, path: "/candidates" },
    { label: "Announcements", icon: <FaBullhorn />, path: "/announcements" },
    { label: "View Results", icon: <FaChartBar />, path: "/results" },
    { label: "My Profile", icon: <FaUserEdit />, path: "/my-profile" },
  ],
  candidate: [
    { label: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { label: "Cast Vote", icon: <FaVoteYea />, path: "/vote" },
    { label: "Candidate List", icon: <FaListUl />, path: "/candidates" },
    { label: "My Profile", icon: <FaUserEdit />, path: "/my-profile" },
    { label: "Election Results", icon: <FaChartBar />, path: "/results" },
    { label: "Announcements", icon: <FaBullhorn />, path: "/announcements" },
    { label: "Profile Settings", icon: <FaUserEdit />, path: "/settings" },
  ],
  admin: [
    { label: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { label: "Cast Vote", icon: <FaVoteYea />, path: "/vote" },
    { label: "Candidate List", icon: <FaListUl />, path: "/candidates" },
    { label: "My Profile", icon: <FaUserEdit />, path: "/my-profile" },
    { label: "Election Results", icon: <FaChartBar />, path: "/results" },
    { label: "Manage Users", icon: <FaUsers />, path: "/users" },
    { label: "Announcements", icon: <FaBullhorn />, path: "/announcements" },
    {
      label: "Manage Elections",
      icon: <FaCalendarAlt />,
      path: "/manage-election",
    },
    { label: "View Results", icon: <FaChartBar />, path: "/results" },
 


  ],
};

const Sidebar = ({ userRole }) => {
  const { logout } = useContext(AuthContext);
  const menuItems = menuConfig[userRole] || [];

  return (
    <div className="h-full w-64 bg-[#F0F5F9] text-black flex flex-col">
      {/* Logo */}
      <div className="flex items-center space-x-2 mt-6 p-2">
        <Shield className="h-8 w-8 text-blue-600" />
        <span className="text-xl font-bold text-gray-900">VoteSecure</span>
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
      <div className="p-3 border-r border-t border-gray-300">
        <button
          onClick={logout} // ✅ logs out user
          className="w-full bg-red-500 hover:bg-red-600 px-3 py-1.5 text-sm rounded-md text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
