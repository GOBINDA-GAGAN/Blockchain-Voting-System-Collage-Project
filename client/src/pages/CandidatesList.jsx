import React, { useEffect, useState } from "react";
import axios from "axios";
import CandidateCard from "../components/CandidateCard";

const API_URL = "http://localhost:5000/api/candidates"; // backend URL

const CandidateListCards = ({ isAdmin = true }) => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch candidates from API
  const fetchCandidates = async () => {
    try {
      const res = await axios.get(API_URL);
      setCandidates(res.data.candidates || []);
    } catch (err) {
      console.error("Error fetching candidates:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  if (loading) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen text-center text-gray-500">
        Loading candidates...
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Candidate List</h2>
      {candidates.length === 0 ? (
        <p className="text-gray-500 text-center">No candidates found</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {candidates.map((candidate) => (
            <CandidateCard
              key={candidate._id}
              candidate={candidate}
              isAdmin={isAdmin}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CandidateListCards;
