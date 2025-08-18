import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const PartyGraph = () => {
const data = [
  { time: "10AM", BJD: 0, BJP: 0, Congress: 0 },
  { time: "11AM", BJD: 12, BJP: 800, Congress: 600 },
  { time: "12PM", BJD: 6000, BJP: 1600, Congress: 1200 },
  { time: "1PM",  BJD: 2200, BJP: 1400, Congress: 1500 },
  { time: "2PM",  BJD: 3000, BJP: 2100, Congress: 1700 },
  { time: "3PM",  BJD: 3500, BJP: 2500, Congress: 1800 },
  { time: "4PM",  BJD: 3300, BJP: 2700, Congress: 2000 },
  { time: "5PM",  BJD: 7000, BJP: 3000, Congress: 2300 },
];


  return (
    <div className="w-full h-96 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        Party Trend
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="BJD" stroke="#22c55e" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="BJP" stroke="#f97316" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="Congress" stroke="#3b82f6" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PartyGraph;
