import React from "react";
import {
  FaArrowUp,
  FaArrowDown,
  FaUsers,
  FaVoteYea,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const StatsCards = () => {
  const stats = [
    {
      title: "Total Voters",
      value: "10,000",
      change: "+5% this year",
      icon: <FaUsers size={24} className="text-red-500" />,
      arrow: <FaArrowUp size={16} className="text-green-400 mr-1" />,
      bg: "bg-yellow-100 border-yellow-300",
    },
    {
      title: "Total Votes Generated",
      value: "8,200",
      change: "+3% from last year",
      icon: <FaVoteYea size={24} className="text-blue-500" />,
      arrow: <FaArrowUp size={16} className="text-green-400 mr-1" />,
      bg: "bg-blue-100 border-blue-300",
    },
    {
      title: "People Voted",
      value: "8,000",
      change: "80% turnout",
      icon: <FaCheckCircle size={24} className="text-green-500" />,
      arrow: <FaArrowUp size={16} className="text-green-400 mr-1" />,
      bg: "bg-green-100 border-green-300",
    },
    {
      title: "Didn’t Vote",
      value: "1,800",
      change: "-2% vs last year",
      icon: <FaTimesCircle size={24} className="text-yellow-500" />,
      arrow: <FaArrowDown size={16} className="text-red-400 mr-1" />,
      bg: "bg-red-100 border-red-300",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-center text-gray-800 border ${stat.bg}`}
        >
          {stat.icon}
          <h3 className="text-lg font-semibold mt-2">{stat.title}</h3>
          <p className="text-2xl font-bold mt-1">{stat.value}</p>
          <span className="flex items-center text-sm mt-1">
            {stat.arrow} {stat.change}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
