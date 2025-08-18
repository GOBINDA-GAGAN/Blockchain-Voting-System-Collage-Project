import React from "react";
import StatsCards from "../components/StatsCards";

const Dashboard = () => {
  const user = {
    name: "Alok",
  };

  return (
    <div className="">
      <div>
        <StatsCards />
      </div>
    </div>
  );
};

export default Dashboard;
