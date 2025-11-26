// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";

const BASE = "http://localhost:5000";

// helper to assign colors for multiple lines
const COLORS = ["#f97316", "#2563eb", "#10b981", "#8b5cf6", "#ef4444", "#facc15"];
const getColor = (idx) => COLORS[idx % COLORS.length];

const Dashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCandidates = async () => {
    try {
      const res = await axios.get(`${BASE}/api/candidates`);
      setCandidates(res.data.candidates || []);
    } catch (err) {
      console.error("Error fetching candidates", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;

  const totalVotes = candidates.reduce((sum, c) => sum + (c.totalVotes || 0), 0);

  const winner =
    totalVotes > 0
      ? candidates.reduce((a, b) => (a.totalVotes >= b.totalVotes ? a : b))
      : null;

  const chartData = candidates.map((c) => ({
    name: `${c.name.firstName} ${c.name.lastName}`,
    votes: c.totalVotes || 0,
  }));

  // Prepare data for multi-line chart
  const lineChartData = candidates.map((c) => {
    const dataObj = { name: c.name.firstName };
    candidates.forEach((cand) => {
      dataObj[cand.name.firstName] = cand.totalVotes || 0;
    });
    return dataObj;
  });

  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-6">
      <h1 className="text-3xl font-bold">Election Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Candidates" value={candidates.length} />
        <StatCard title="Total Votes" value={totalVotes} />
        <StatCard
          title="Winner"
          value={winner ? `${winner.name.firstName} ${winner.name.lastName}` : "—"}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4">Votes by Candidate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="votes" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart (multi-line) */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4">Vote Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={lineChartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {candidates.map((c, idx) => (
                <Line
                  key={c._id}
                  type="monotone"
                  dataKey={c.name.firstName}
                  stroke={getColor(idx)}
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  activeDot={{ r: 7 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Candidates */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold mb-4">Top Candidates</h3>
        {candidates
          .slice()
          .sort((a, b) => b.totalVotes - a.totalVotes)
          .slice(0, 5)
          .map((c) => (
            <div
              key={c._id}
              className="flex items-center gap-4 py-3 border-b last:border-b-0"
            >
              <img
                src={`${BASE}${c.image_of_Candidate || ""}`}
                alt=""
                className="w-12 h-12 rounded-full object-cover border"
              />
              <div>
                <div className="font-medium">
                  {c.name.firstName} {c.name.lastName}
                </div>
                <div className="text-sm text-gray-500">
                  {c.role_for_Election} — {c.totalVotes} votes
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Table all candidates */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold mb-4">All Candidates</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-left text-sm text-gray-500">
              <tr>
                <th className="p-2">Photo</th>
                <th className="p-2">Name</th>
                <th className="p-2">Role</th>
                <th className="p-2">Votes</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((c) => (
                <tr key={c._id} className="border-t">
                  <td className="p-2">
                    <img
                      src={`${BASE}${c.image_of_Candidate || ""}`}
                      className="w-10 h-10 rounded-full object-cover"
                      alt=""
                    />
                  </td>
                  <td className="p-2">
                    {c.name.firstName} {c.name.lastName}
                  </td>
                  <td className="p-2">{c.role_for_Election}</td>
                  <td className="p-2 font-medium">{c.totalVotes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="text-sm text-gray-500">{title}</div>
    <div className="text-2xl font-bold mt-2">{value}</div>
  </div>
);

export default Dashboard;
