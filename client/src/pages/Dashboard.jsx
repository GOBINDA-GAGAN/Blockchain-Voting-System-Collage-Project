import React from "react";

const Dashboard = () => {
  const user = {
    name: "Alok",
  };
  return (
    <div className="bg-[#EFF5F9]">
      <h1 className="text-2xl font-bold text-gray-800">Welcome {user.name}</h1>
    </div>
  );
};

export default Dashboard;
