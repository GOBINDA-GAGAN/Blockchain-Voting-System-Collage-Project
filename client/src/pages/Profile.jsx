import React from "react";

const Profile = () => {
  // 🟢 Dummy User Data
  const user = {
    name: "Gobinda Gagan Dey",
    email: "gobinda@example.com",
    phone: "+91 98765 43210",
    department: "Computer Science (CSE)",
    year: "3rd Year",
    age: 21,
    gender: "Male",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    bio: "Hi 👋 I'm Gobinda, a student who enjoys coding, gaming, and hostel life. Always curious to learn new things!",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white rounded-2xl shadow-lg flex w-full max-w-4xl overflow-hidden">
        
        {/* Left Section - Avatar & Button */}
        <div className="w-1/3 bg-gradient-to-b from-blue-600 to-indigo-700 p-6 flex flex-col items-center">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-40 h-40 rounded-full border-4 border-white shadow-md"
          />
          <h1 className="text-xl font-bold text-white mt-4">{user.name}</h1>
          <p className="text-blue-200 text-sm">{user.department}</p>

          <button className="mt-6 px-5 py-2 rounded-xl bg-white text-blue-700 font-semibold shadow hover:bg-gray-100 transition">
            ✏️ Edit Profile
          </button>
        </div>

        {/* Right Section - User Details */}
        <div className="w-2/3 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile Details</h2>
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-gray-700">
            <p><span className="font-semibold">📧 Email:</span> {user.email}</p>
            <p><span className="font-semibold">📱 Phone:</span> {user.phone}</p>
            <p><span className="font-semibold">🎓 Year:</span> {user.year}</p>
            <p><span className="font-semibold">👤 Age:</span> {user.age}</p>
            <p><span className="font-semibold">⚧ Gender:</span> {user.gender}</p>
            <p><span className="font-semibold">🏫 Department:</span> {user.department}</p>
          </div>

          {/* Bio Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">About Me</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{user.bio}</p>
          </div>

          {/* Logout Button */}
          <div className="mt-8">
            <button className="px-5 py-2 rounded-xl bg-red-500 text-white font-semibold shadow hover:bg-red-600 transition">
              🚪 Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
