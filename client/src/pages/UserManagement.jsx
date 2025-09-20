import React, { useState, useEffect } from "react";
import {
  FaBan,
  FaEdit,
  FaEye,
  FaTrash,
  FaUserPlus,
  FaSearch,
} from "react-icons/fa";
import axiosInstance from "../../Api/axiosInstance";
import API from "../../Api/apiEndpoints";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalAdmins: 0,
    bannedThisMonth: 0,
    newThisMonth: 0,
  });

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await axiosInstance.get(API.USERS.GET_ALL, {
          withCredentials: true,
        });

        setUsers(res.data.users);
        setStats(res.data.stats); // ✅ dynamic stats
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    getAllUsers();
  }, []);

  return (
    <div className="p-6 space-y-6">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold">Welcome User Management Page</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-blue-100 rounded-2xl shadow p-4 text-center">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-2xl font-bold">{stats.totalUsers}</p>
        </div>
        <div className="bg-yellow-100 rounded-2xl shadow p-4 text-center">
          <h2 className="text-lg font-semibold">Admins</h2>
          <p className="text-2xl font-bold">{stats.totalAdmins}</p>
        </div>
        <div className="bg-purple-100 rounded-2xl shadow p-4 text-center">
          <h2 className="text-lg font-semibold">New This Month</h2>
          <p className="text-2xl font-bold">{stats.newThisMonth}</p>
        </div>
        <div className="bg-red-100 rounded-2xl shadow p-4 text-center">
          <h2 className="text-lg font-semibold">Banned Users</h2>
          <p className="text-2xl font-bold">{stats.bannedThisMonth}</p>
        </div>
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
              <tr key={user._id} className="border-b hover:bg-gray-50">
                <td className="p-3">{i + 1}</td>
                <td className="p-3 flex items-center space-x-3">
                  <img
                    src={user.image || "https://via.placeholder.com/40"}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </td>
                <td className="p-3">{user.mobile || "NULL"}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
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
