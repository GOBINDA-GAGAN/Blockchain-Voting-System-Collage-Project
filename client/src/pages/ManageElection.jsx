// src/pages/ManageElection.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

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
    photo: null,
  });
  const [editingCandidate, setEditingCandidate] = useState(null);

  const roles = ["President", "Vice President", "Secretary", "Treasurer"];
  const departments = ["CSE", "ECE", "EEE", "ME", "CE", "IT", "MBA"];

  // Fetch candidates
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

  // Add/Edit Candidate
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append("role_for_Election", form.role_for_Election);
      fd.append("email", form.email);
      if (!editingCandidate) fd.append("password", form.password);
      fd.append("department", form.department);
      fd.append("year", form.year);
      fd.append("age", form.age);
      fd.append("gender", form.gender);
      fd.append("manifesto", form.manifesto); // send as string, backend splits by ","
      fd.append("firstName", form.name.firstName);
      fd.append("lastName", form.name.lastName);
      fd.append("contactEmail", form.contact.email);
      fd.append("contactPhone", form.contact.phone);
      if (form.photo) fd.append("photo", form.photo);

      if (editingCandidate) {
        await axios.put(`${API_URL}/${editingCandidate._id}`, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post(API_URL, fd, {
          headers: { "Content-Type": "multipart/form-data" },
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
        photo: null,
      });
      setEditingCandidate(null);
      fetchCandidates();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error creating/updating candidate");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchCandidates();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (candidate) => {
    setEditingCandidate(candidate);
    setForm({
      role_for_Election: candidate.role_for_Election || "",
      email: candidate.email || "",
      password: "",
      name: {
        firstName: candidate.name.firstName,
        lastName: candidate.name.lastName,
      },
      department: candidate.department || "",
      year: candidate.year || "",
      age: candidate.age || "",
      gender: candidate.gender || "",
      manifesto: candidate.manifesto ? candidate.manifesto.join(",") : "",
      contact: {
        email: candidate.contact?.email || "",
        phone: candidate.contact?.phone || "",
      },
      photo: null,
    });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        🎓 Manage College Elections
      </h1>

      {/* Add/Edit Candidate Form */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-10">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          {editingCandidate ? "✏️ Edit Candidate" : "➕ Add Candidate"}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Role */}
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

          {/* First Name */}
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

          {/* Last Name */}
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

          {/* Department */}
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

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            required={!editingCandidate}
          />

          {/* Year */}
          <input
            type="text"
            placeholder="Year"
            value={form.year}
            onChange={(e) => setForm({ ...form, year: e.target.value })}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          {/* Age */}
          <input
            type="number"
            placeholder="Age"
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          {/* Gender */}
          <input
            type="text"
            placeholder="Gender"
            value={form.gender}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          {/* Manifesto */}
          <input
            type="text"
            placeholder="Manifesto (comma separated)"
            value={form.manifesto}
            onChange={(e) => setForm({ ...form, manifesto: e.target.value })}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 col-span-1 md:col-span-2"
          />

          {/* Contact Email */}
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

          {/* Contact Phone */}
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

          {/* Photo Upload */}
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-2 font-medium text-gray-700">
              Candidate Photo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setForm({ ...form, photo: e.target.files[0] })}
              className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
            />
            {form.photo && (
              <img
                src={URL.createObjectURL(form.photo)}
                alt="Preview"
                className="mt-2 w-28 h-28 rounded-full object-cover border-2 border-gray-300"
              />
            )}
          </div>

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
                <th className="p-3 text-left">Photo</th>
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
                    <img
                      src={
                        c.image_of_Candidate
                          ? `http://localhost:5000${c.image_of_Candidate}`
                          : "https://via.placeholder.com/50"
                      }
                      alt="Candidate"
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                    />
                  </td>
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
                  <td colSpan="6" className="text-gray-500 p-4 text-center">
                    No candidates found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageElection;
