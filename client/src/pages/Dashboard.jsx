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

      <div>
        <div></div>
      </div>

    </div>
  );
};

export default Dashboard;
