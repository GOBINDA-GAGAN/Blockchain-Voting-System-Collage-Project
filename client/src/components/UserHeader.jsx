import React, { useEffect, useState } from "react";

const UserHeader = ({ user }) => {
  const electionDetails = {
    year: "2025",
    startDate: "March 1, 2025",
    endDate: "March 15, 2025 23:59:59",
    description: "General Election for National Assembly",
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
    <div className="border border-purple-500 text-gray-800 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-6 flex flex-col md:flex-row justify-between items-center">
      {/* Left side */}
      <div>
        <h2 className="text-2xl font-bold text-purple-700 drop-shadow-sm">
          Welcome, {user.name} 👋
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          {electionDetails.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 rounded-lg shadow-sm border border-purple-300 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200">
            <p className="text-sm text-gray-700">Election Year</p>
            <h3 className="text-lg font-semibold text-purple-800">{electionDetails.year}</h3>
          </div>
          <div className="p-4 rounded-lg shadow-sm border border-purple-300 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200">
            <p className="text-sm text-gray-700">Start Date</p>
            <h3 className="text-lg font-semibold text-purple-800">{electionDetails.startDate}</h3>
          </div>
          <div className="p-4 rounded-lg shadow-sm border border-purple-300 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200">
            <p className="text-sm text-gray-700">End Date</p>
            <h3 className="text-lg font-semibold text-purple-800">{electionDetails.endDate}</h3>
          </div>
        </div>
      </div>

      {/* Right side - Countdown */}
      <div className="mt-6 md:mt-0 md:ml-8 text-center">
        <h3 className="text-lg font-semibold mb-2 text-purple-600">
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
              className="p-3 rounded-lg shadow-sm border border-purple-300 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200"
            >
              <span className="text-xl font-bold text-purple-800">
                {item.value}
              </span>
              <p className="text-xs text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
