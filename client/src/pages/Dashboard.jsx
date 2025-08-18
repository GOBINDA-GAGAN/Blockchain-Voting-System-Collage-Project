import React from "react";
import StatsCards from "../components/StatsCards";
import UserHeader from "../components/UserHeader";

const Dashboard = () => {
  const user = {
    name: "Alok",
  };

  return (
    <div className="">
      <div>
        <UserHeader user={user} />
      </div>

      <div>
        <StatsCards />
      </div>

      <div className="grid grid-cols-2">
        <div className="bg-red-500 h-[400px]"></div>
        <div></div>
      </div>

    </div>
  );
};

export default Dashboard;
