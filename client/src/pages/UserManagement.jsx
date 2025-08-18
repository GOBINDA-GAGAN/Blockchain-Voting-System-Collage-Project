import React, { useState } from "react";
import { FaBan, FaEdit, FaEye, FaTrash, FaUserPlus, FaSearch } from "react-icons/fa";

const UserManagement = () => {
  const stats = [
    { title: "Total Users", value: 52, color: "bg-blue-100" },
    { title: "Active Users", value: 14, color: "bg-green-100" },
    { title: "Admins", value: 12, color: "bg-yellow-100" },
    { title: "New This Month", value: 5, color: "bg-purple-100" },
    { title: "Ban Users", value: 2, color: "bg-red-100" },
  ];

  const [users, setUsers] = useState([
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Amit Sharma",
      email: "amit.sharma@example.com",
      mobile: "+91 9876543210",
      role: "User",
      joinDate: "2024-08-10",
    },
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Priya Singh",
      email: "priya.singh@example.com",
      mobile: "+91 9123456780",
      role: "Admin",
      joinDate: "2024-07-22",
    },
    {
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      name: "Ravi Kumar",
      email: "ravi.kumar@example.com",
      mobile: "+91 9988776655",
      role: "User",
      joinDate: "2024-09-02",
    },
  ]);

  return (
    <div className="p-6 space-y-6">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold">Welcome User Management Page</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-5 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`${stat.color} rounded-2xl shadow p-4 text-center`}
          >
            <h2 className="text-lg font-semibold">{stat.title}</h2>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Search and Add User */}
      <div className="flex justify-between items-center mb-4 mt-4">
        <div className="flex items-center border rounded-lg p-2 w-1/3">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search user..."
            className="outline-none w-full"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          <FaUserPlus /> Add User
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl shadow p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-900 text-left text-white">
              <th className="p-3">Sl No</th>
              <th className="p-3">User</th>
              <th className="p-3">Mobile</th>
              <th className="p-3">Role</th>
              <th className="p-3">Join Date</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                {/* Serial Number */}
                <td className="p-3">{i + 1}</td>

                {/* User Info */}
                <td className="p-3 flex items-center space-x-3">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </td>

                <td className="p-3">{user.mobile}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">{user.joinDate}</td>

                {/* Action Buttons */}
                <td className="p-3 flex gap-4">
                  <button className="text-blue-600">
                    <FaEdit size={18} />
                  </button>
                  <button className="text-red-500">
                    <FaTrash size={18} />
                  </button>
                  <button className="text-green-500">
                    <FaEye size={18} />
                  </button>
                  <button className="text-gray-500">
                    <FaBan size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
