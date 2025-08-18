import React from "react";

const ProfileCard = () => {
  return (
    <div className="max-w-sm mx-auto mt-10 bg-white rounded-2xl shadow-md p-6 text-center">
      {/* Profile Image */}
      <img
        src="https://avatars.githubusercontent.com/u/217884?v=4"
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto border-2 border-blue-500"
      />

      {/* Name */}
      <h2 className="mt-4 text-xl font-semibold text-gray-800">
        Gobinda Gagan
      </h2>

      {/* Email */}
      <p className="text-gray-500 text-sm">johndoe@example.com</p>

      {/* Bio / Tag */}
      <p className="mt-2 text-gray-600 text-sm">
        🚀 Frontend Developer | React | UI/UX
      </p>
      <button className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
        Logout
      </button>
    </div>
  );
};

export default ProfileCard;
