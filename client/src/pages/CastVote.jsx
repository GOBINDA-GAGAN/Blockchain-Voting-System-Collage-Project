import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const API_URL = "http://localhost:5000/api/candidates";

// --------------------------- MODAL ---------------------------
const CastVoteModal = ({ isOpen, onClose, candidate, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative w-[90%] max-w-md bg-white rounded-2xl shadow-xl p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl"
        >
          <FaTimes />
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">Cast Your Vote</h2>

        <div className="text-center mb-6">
          <img
            src={
              candidate?.image_of_Candidate
                ? `http://localhost:5000${candidate.image_of_Candidate}`
                : "https://via.placeholder.com/100"
            }
            className="w-28 h-28 mx-auto rounded-full shadow mb-4"
          />
          <h3 className="text-xl font-semibold">
            {candidate?.name.firstName} {candidate?.name.lastName}
          </h3>
          <p className="text-gray-600">{candidate?.role_for_Election}</p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="w-1/2 py-2 border rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={() => onConfirm(candidate)}
            className="w-1/2 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Confirm Vote
          </button>
        </div>
      </div>
    </div>
  );
};

// --------------------------- MAIN COMPONENT ---------------------------
const CastVote = () => {
  const [candidates, setCandidates] = useState([]);
  const [user, setUser] = useState(null);
  const [isVoteModalOpen, setIsVoteModalOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  // allow cookies
  axios.defaults.withCredentials = true;

  // Fetch the logged-in user
  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/me");
      setUser(res.data.user);
    } catch (err) {
      console.log("User fetch error:", err);
    }
  };

  // Fetch candidates
  const fetchCandidates = async () => {
    try {
      const res = await axios.get(API_URL);
      setCandidates(res.data.candidates);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCandidates();
    fetchUser();
  }, []);

  // Open modal
  const handleVoteClick = (candidate) => {
    if (!user?.hasVoted) {
      setSelectedCandidate(candidate);
      setIsVoteModalOpen(true);
    }
  };

  // Cast vote
  const handleConfirmVote = async (candidate) => {
    try {
      await axios.put(`${API_URL}/vote/${candidate._id}`, {}, { withCredentials: true });

      toast.success("Your vote has been cast!");
      setIsVoteModalOpen(false);

      fetchCandidates();
      fetchUser();
    } catch (err) {
      toast.error(err?.response?.data?.msg || "Something went wrong");
      setIsVoteModalOpen(false);
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <Toaster />

      <h1 className="text-3xl font-extrabold mb-6 text-center">
        Election Candidates 2025
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {candidates.map((c) => (
          <div
            key={c._id}
            className={`bg-white border rounded-xl shadow p-6 text-center transition-all ${
              user?.hasVoted ? "opacity-50" : ""
            }`}
          >
            <img
              src={
                c.image_of_Candidate
                  ? `http://localhost:5000${c.image_of_Candidate}`
                  : "https://via.placeholder.com/50"
              }
              className="w-24 h-24 mx-auto rounded-full shadow mb-4"
            />

            <h2 className="text-lg font-semibold">
              {c.name.firstName} {c.name.lastName}
            </h2>

            <p className="text-gray-500">{c.role_for_Election}</p>
            <p className="text-gray-600 mt-1">Votes: {c.totalVotes}</p>

            <button
              onClick={() => handleVoteClick(c)}
              disabled={user?.hasVoted}
              title={user?.hasVoted ? "You already voted" : "Cast your vote"}
              className={`mt-4 w-full py-2 rounded-lg ${
                user?.hasVoted
                  ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {user?.hasVoted ? "Vote Locked" : "Cast Vote"}
            </button>
          </div>
        ))}
      </div>

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
