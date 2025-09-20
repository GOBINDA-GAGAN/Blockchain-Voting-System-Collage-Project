import React, { useEffect, useState } from "react";

const UserHeader = ({ user }) => {
  const electionDetails = {
    name: "National Assembly Election",
    type: "General Election",
    details: [
      {
        label: "Election Year",
        value: "2025",
      },
      {
        label: "Start Date",
        value: "March 1, 2025",
      },
      {
        label: "End Date",
        value: "March 15, 2025 23:59:59",
      },
    ],
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = new Date(electionDetails.endDate) - new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border border-purple-500 -z-30 text-gray-800 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-6 flex flex-col md:flex-row justify-between items-center">
      {/* Left side */}
      <div>
        <h2 className="text-2xl font-bold text-purple-700 drop-shadow-sm">
          Welcome, {user.name} 👋
        </h2>
        <p className="mt-2 text-sm text-gray-600">{electionDetails.name}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {electionDetails.details.map((detail, index) => (
            <div
              key={index}
              className="p-4 rounded-lg shadow-sm border border-purple-300 bg-gradient-to-r from-orange-100 via-white to-green-100"
            >
              <p className="text-sm text-gray-700">{detail.label}</p>
              <h3 className="text-lg font-semibold text-blue-600">
                {detail.value}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div>
        {/* Right side - Countdown */}
        <div className="mt-6 md:mt-0 md:ml-8 text-center">
          <h3 className="text-lg font-semibold mb-2 text-orange-600">
            ⏳ Time Left
          </h3>
          <div className="flex gap-3 justify-center">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Mins", value: timeLeft.minutes },
              { label: "Secs", value: timeLeft.seconds },
            ].map((item, i) => (
              <div
                key={i}
                className="p-3 rounded-lg shadow-sm border border-purple-300 bg-gradient-to-r from-orange-100 via-white to-green-100"
              >
                <span className="text-xl font-bold text-blue-500">
                  {item.value}
                </span>
                <p className="text-xs text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserHeader;
