import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const CollegeElectionWinnerCard = () => {
  const [winner, setWinner] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:5000/api/candidates"; // your backend

  useEffect(() => {
    fetchWinner();
  }, []);

  const fetchWinner = async () => {
    try {
      const res = await axios.get(API_URL);
      if (res.data.candidates && res.data.candidates.length > 0) {
        const sorted = res.data.candidates.sort(
          (a, b) => b.votes.length - a.votes.length
        );
        setWinner(sorted[0]); // pick only the top candidate
      }
    } catch (err) {
      console.error("Error fetching winner", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center text-2xl font-bold">
        Loading Winner...
      </div>
    );

  if (!winner)
    return (
      <div className="h-screen flex items-center justify-center text-2xl font-bold">
        No Winner Found
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-6">
      <motion.div
        className="bg-white shadow-2xl rounded-3xl p-6 flex flex-col items-center w-80 backdrop-blur-md border border-white/30"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        {/* Crown */}
        <motion.div
          className="text-5xl mb-2"
          animate={{ y: [-10, 0, -10] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          👑
        </motion.div>

        {/* Profile Image */}
        <img
          src={
            winner.image_of_Candidate
              ? `http://localhost:5000${winner.image_of_Candidate}`
              : "https://via.placeholder.com/150"
          }
          alt={winner.name?.firstName}
          className="w-32 h-32 rounded-full object-cover border-4 border-yellow-400"
        />

        {/* Name & Role */}
        <h2 className="mt-4 text-2xl font-bold text-indigo-900 text-center">
          {winner.name?.firstName} {winner.name?.lastName}
        </h2>
        <p className="text-gray-600 text-sm mt-1">{winner.role_for_Election}</p>

        {/* Votes */}
        <div className="w-full bg-gray-300 h-4 rounded-full mt-4 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
          />
        </div>
        <p className="text-yellow-600 font-semibold mt-2 text-lg">
          {winner.votes.length} votes
        </p>
      </motion.div>
    </div>
  );
};

export default CollegeElectionWinnerCard;
