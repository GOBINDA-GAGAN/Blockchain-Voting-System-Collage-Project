import React from "react";
import StatsCards from "../components/StatsCards";
import UserHeader from "../components/UserHeader";
import PartyGraph from "../components/PartyGraph";
import ElectionResultsPartyWise from "../components/ElectionResultsPartyWise";

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

      <div className="grid grid-cols-[65%_33%] w-full gap-6 mb-8">
        <div className="">
          <PartyGraph />
        </div>
        <div className="grid grid-rows-3 h-[600px]">
          <ElectionResultsPartyWise />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
