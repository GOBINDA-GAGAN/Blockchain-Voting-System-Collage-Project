// src/pages/ManageElection.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
import CandidateA4Sheet from "../components/CandidateA4Sheet";

const API_URL = "http://localhost:5000/api/candidates"; // backend base URL

const ManageElection = () => {
  const [candidates, setCandidates] = useState([]);
  const [form, setForm] = useState({
    role_for_Election: "",
    email: "",
    password: "",
    name: { firstName: "", lastName: "" },
    department: "",
    year: "",
    age: "",
    gender: "",
    manifesto: "",
    contact: { email: "", phone: "" },
  });
  const [editingCandidate, setEditingCandidate] = useState(null);
  const [viewCandidate, setViewCandidate] = useState(false);
  const [viewCandidateId, setViewCandidateID] = useState(null);
  const [LoadingView, setLoadingView] = useState(false);

  // Dropdown options
  const roles = ["President", "Vice President", "Secretary", "Treasurer"];
  const departments = ["CSE", "ECE", "EEE", "ME", "CE", "IT", "MBA"];

  // Fetch all candidates
  const fetchCandidates = async () => {
    try {
      const res = await axios.get(API_URL);
      setCandidates(res.data.candidates || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidateById = async (id) => {
    try {
      const res = await axios.get(`${API_URL}/${id}`);
      return res.data.candidate;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  // Add or Edit candidate
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingCandidate) {
        // Update candidate
        await axios.put(`${API_URL}/${editingCandidate._id}`, {
          ...form,
          manifesto: form.manifesto.split(","),
        });
      } else {
        // Add new candidate
        await axios.post(API_URL, {
          ...form,
          manifesto: form.manifesto.split(","),
        });
      }

      setForm({
        role_for_Election: "",
        email: "",
        password: "",
        name: { firstName: "", lastName: "" },
        department: "",
        year: "",
        age: "",
        gender: "",
        manifesto: "",
        contact: { email: "", phone: "" },
      });
      setEditingCandidate(null);
      fetchCandidates();
    } catch (err) {
      console.error(err);
    }
  };

  // Delete candidate
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchCandidates();
    } catch (err) {
      console.error(err);
    }
  };

  const handleView = async (id) => {
    setLoadingView(true);
    const candidate = await fetchCandidateById(id);
    setViewCandidate(true);
    setViewCandidateID(candidate);
    setLoadingView(false);
  };

  // Dashboard counts
  const totalCandidates = candidates.length;
  const verifiedCount = candidates.filter(
    (c) => c.applicationStatus === "Verified"
  ).length;
  const pendingCount = candidates.filter(
    (c) => c.applicationStatus === "Pending"
  ).length;

  // Fill form for edit
  const handleEdit = (candidate) => {
    setEditingCandidate(candidate);
    setForm({
      ...candidate,
      manifesto: candidate.manifesto ? candidate.manifesto.join(",") : "",
    });
  };
  console.log(viewCandidateId);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        🎓 Manage College Elections
      </h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-lg font-semibold">Total Candidates</h2>
          <p className="text-3xl font-bold mt-2">{totalCandidates}</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-lg font-semibold">Verified</h2>
          <p className="text-3xl font-bold mt-2">{verifiedCount}</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-lg font-semibold">Pending</h2>
          <p className="text-3xl font-bold mt-2">{pendingCount}</p>
        </div>
      </div>

      {/* Add/Edit Candidate Form */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-10">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          {editingCandidate ? "✏️ Edit Candidate" : "➕ Add Candidate"}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Role dropdown */}
          <select
            value={form.role_for_Election}
            onChange={(e) =>
              setForm({ ...form, role_for_Election: e.target.value })
            }
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Role</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>

          {/* First name */}
          <input
            type="text"
            placeholder="First Name"
            value={form.name.firstName}
            onChange={(e) =>
              setForm({
                ...form,
                name: { ...form.name, firstName: e.target.value },
              })
            }
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Last name */}
          <input
            type="text"
            placeholder="Last Name"
            value={form.name.lastName}
            onChange={(e) =>
              setForm({
                ...form,
                name: { ...form.name, lastName: e.target.value },
              })
            }
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          {/* Department dropdown */}
          <select
            value={form.department}
            onChange={(e) => setForm({ ...form, department: e.target.value })}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Department</option>
            {departments.map((dep) => (
              <option key={dep} value={dep}>
                {dep}
              </option>
            ))}
          </select>

          {/* Other inputs */}
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            required={!editingCandidate}
          />
          <input
            type="text"
            placeholder="Year"
            value={form.year}
            onChange={(e) => setForm({ ...form, year: e.target.value })}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Age"
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Gender"
            value={form.gender}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Manifesto (comma separated)"
            value={form.manifesto}
            onChange={(e) => setForm({ ...form, manifesto: e.target.value })}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 col-span-1 md:col-span-2"
          />
          <input
            type="text"
            placeholder="Contact Email"
            value={form.contact.email}
            onChange={(e) =>
              setForm({
                ...form,
                contact: { ...form.contact, email: e.target.value },
              })
            }
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Contact Phone"
            value={form.contact.phone}
            onChange={(e) =>
              setForm({
                ...form,
                contact: { ...form.contact, phone: e.target.value },
              })
            }
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition md:col-span-2"
          >
            {editingCandidate ? "Update Candidate" : "Add Candidate"}
          </button>
        </form>
      </div>

      {/* Candidate List */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">📋 Candidates</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((c) => (
                <tr
                  key={c._id}
                  className="hover:bg-gray-50 border-b transition"
                >
                  <td className="p-3">
                    {c.name.firstName} {c.name.lastName}
                  </td>
                  <td className="p-3">{c.role_for_Election}</td>
                  <td className="p-3">{c.department}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        c.applicationStatus === "Verified"
                          ? "bg-green-100 text-green-700"
                          : c.applicationStatus === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {c.applicationStatus}
                    </span>
                  </td>
                  <td className="p-3 text-center flex gap-2 justify-center">
                    <button
                      onClick={() => handleView(c._id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleEdit(c)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(c._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {candidates.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-gray-500 p-4 text-center">
                    No candidates found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {console.log(viewCandidate)}

      {viewCandidate && (
        <div className="fixed inset-0 bg-gray-900/60 flex justify-center items-center z-50">
          <div className="relative w-[90%] h-full rounded-lg shadow-lg p-6 overflow-y-auto overflow-x-hidden bg-white">
            {/* Close Button */}
            <button
              onClick={() => setViewCandidate(true)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-2xl"
            >
              <FaTimes />
            </button>

            <CandidateA4Sheet candidate={viewCandidateId} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageElection;
