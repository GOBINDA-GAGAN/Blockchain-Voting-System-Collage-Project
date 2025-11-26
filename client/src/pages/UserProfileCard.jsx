import React, { useEffect, useState } from "react";
import axios from "axios";

const ProfileCardGrid = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({});

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/profile", {
        withCredentials: true,
      });
      setUser(res.data.user);
      setForm(res.data.user);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleAddressChange = (e) =>
    setForm({ ...form, address: { ...form.address, [e.target.name]: e.target.value } });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("http://localhost:5000/api/auth/profile", form, {
        withCredentials: true,
      });
      setUser(res.data.user);
      setEditing(false);
      alert("Profile updated successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    }
  };

  if (loading) return <div className="h-screen flex items-center justify-center">Loading...</div>;
  if (!user) return <div className="h-screen flex items-center justify-center">No user found</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-xl rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-indigo-700">My Profile</h2>
        <button
          onClick={() => setEditing(!editing)}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          {editing ? "Cancel" : "Edit"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={user.image || "https://via.placeholder.com/150"}
            alt={user.name}
            className="w-36 h-36 object-cover rounded-full border-4 border-indigo-200 shadow-md"
          />
        </div>

        {/* Info */}
        <div className="md:col-span-2">
          {editing ? (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={form.name || ""}
                onChange={handleChange}
                className="border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Name"
              />
              <input
                type="email"
                value={user.email}
                disabled
                className="border p-2 rounded bg-gray-100 shadow-sm"
              />
              <input
                type="number"
                name="age"
                value={form.age || ""}
                onChange={handleChange}
                className="border p-2 rounded shadow-sm"
                placeholder="Age"
              />
              <select
                name="gender"
                value={form.gender || ""}
                onChange={handleChange}
                className="border p-2 rounded shadow-sm"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                name="phone"
                value={form.phone || ""}
                onChange={handleChange}
                className="border p-2 rounded shadow-sm"
                placeholder="Phone"
              />
              <input
                type="text"
                name="mobile"
                value={form.mobile || ""}
                onChange={handleChange}
                className="border p-2 rounded shadow-sm"
                placeholder="Mobile"
              />
              <input
                type="text"
                name="village"
                value={form.address?.village || ""}
                onChange={handleAddressChange}
                className="border p-2 rounded shadow-sm"
                placeholder="Village"
              />
              <input
                type="text"
                name="district"
                value={form.address?.district || ""}
                onChange={handleAddressChange}
                className="border p-2 rounded shadow-sm"
                placeholder="District"
              />
              <input
                type="text"
                name="state"
                value={form.address?.state || ""}
                onChange={handleAddressChange}
                className="border p-2 rounded shadow-sm"
                placeholder="State"
              />
              <input
                type="text"
                name="pincode"
                value={form.address?.pincode || ""}
                onChange={handleAddressChange}
                className="border p-2 rounded shadow-sm"
                placeholder="Pincode"
              />
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div><strong>Name:</strong> {user.name}</div>
              <div><strong>Email:</strong> {user.email}</div>
              <div><strong>Age:</strong> {user.age || "—"}</div>
              <div><strong>Gender:</strong> {user.gender || "—"}</div>
              <div><strong>Phone:</strong> {user.phone || "—"}</div>
              <div><strong>Mobile:</strong> {user.mobile || "—"}</div>
              <div><strong>Village:</strong> {user.address?.village || "—"}</div>
              <div><strong>District:</strong> {user.address?.district || "—"}</div>
              <div><strong>State:</strong> {user.address?.state || "—"}</div>
              <div><strong>Pincode:</strong> {user.address?.pincode || "—"}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCardGrid;
