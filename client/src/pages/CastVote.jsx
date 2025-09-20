import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

// Cast Vote Modal Component
const CastVoteModal = ({ isOpen, onClose, candidate, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Box */}
      <div className="relative w-[90%] max-w-md bg-white rounded-2xl shadow-2xl p-6 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl"
        >
          <FaTimes />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Cast Your Vote 🗳️
        </h2>

        {/* Candidate Info */}
        {candidate ? (
          <div className="text-center mb-6">
            <img
              src={candidate.image}
              alt={candidate.name}
              className="w-28 h-28 mx-auto rounded-full shadow-lg border-4 border-blue-500 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              {candidate.name}
            </h3>
            <p className="text-gray-600 italic">{candidate.party}</p>
          </div>
        ) : (
          <p className="text-center text-gray-500">No candidate selected</p>
        )}

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="w-1/2 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(candidate)}
            className="w-1/2 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow hover:from-green-600 hover:to-green-700 transition"
          >
            Confirm Vote
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Page
const CastVote = () => {
  const [isVoteModalOpen, setIsVoteModalOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  // 🟢 Dummy Data
  const candidates = [
    {
      id: 1,
      name: "Alice Johnson",
      party: "Progressive Party",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Bob Smith",
      party: "Unity Party",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      id: 3,
      name: "Charlie Brown",
      party: "Green Party",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
    },
  ];

  const handleVoteClick = (candidate) => {
    setSelectedCandidate(candidate);
    setIsVoteModalOpen(true);
  };

  const handleConfirmVote = (candidate) => {
    alert(`✅ Your vote has been cast for: ${candidate.name}`);
    setIsVoteModalOpen(false);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">
        Election Candidates 2025
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {candidates.map((c) => (
          <div
            key={c.id}
            className="bg-white border rounded-xl shadow-md hover:shadow-lg p-6 flex flex-col items-center transition"
          >
            <img
              src={c.image}
              alt={c.name}
              className="w-24 h-24 rounded-full shadow mb-4 border-2 border-gray-200"
            />
            <h2 className="text-lg font-semibold text-gray-900">{c.name}</h2>
            <p className="text-gray-500">{c.party}</p>
            <button
              onClick={() => handleVoteClick(c)}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Cast Vote
            </button>
          </div>
        ))}
      </div>

      {/* Vote Modal */}
      <CastVoteModal
        isOpen={isVoteModalOpen}
        onClose={() => setIsVoteModalOpen(false)}
        candidate={selectedCandidate}
        onConfirm={handleConfirmVote}
      />
    </div>
  );
};

export default CastVote;
