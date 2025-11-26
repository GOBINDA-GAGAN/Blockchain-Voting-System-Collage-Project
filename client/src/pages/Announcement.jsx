import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { AuthContext } from "../context/AuthContext";

const Announcements = () => {
  const [form, setForm] = useState({ title: "", message: "" });
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);
  const role = user?.role || "user";
 

  const fetchAnnouncements = async () => {
    const res = await axios.get("http://localhost:5000/api/announcements");
    if (res.data.success) setData(res.data.data);
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (role !== "admin") return; // safety check

    const res = await axios.post("http://localhost:5000/api/announcements", form);
    if (res.data.success) {
      setForm({ title: "", message: "" });
      fetchAnnouncements();
    }
  };

  const deleteAnn = async (id) => {
    if (role !== "admin") return; // safety check

    await axios.delete(`http://localhost:5000/api/announcements/${id}`);
    fetchAnnouncements();
  };

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        📢 Announcements
      </h1>

      {/* Admin Only Create Form */}
      {role === "admin" && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md mb-8"
        >
          <input
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full p-3 border rounded-md mb-4"
            required
          />

          <textarea
            placeholder="Write announcement..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-3 border rounded-md mb-4"
            rows="4"
            required
          />

          <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700">
            Post Announcement
          </button>
        </form>
      )}

      {/* List */}
      <div className="grid gap-4">
        {data.map((ann) => (
          <div
            key={ann._id}
            className="bg-white shadow-sm p-5 rounded-lg border flex justify-between items-start"
          >
            <div>
              <h2 className="text-lg font-semibold">{ann.title}</h2>
              <p className="text-gray-600 mt-1">{ann.message}</p>
              <p className="text-sm text-gray-400 mt-2">
                Posted: {new Date(ann.createdAt).toLocaleString()}
              </p>
            </div>

            {/* Delete only for admin */}
            {role === "admin" && (
              <button
                onClick={() => deleteAnn(ann._id)}
                className="p-2 text-red-500 hover:bg-red-100 rounded-md"
              >
                <MdDelete size={24} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
