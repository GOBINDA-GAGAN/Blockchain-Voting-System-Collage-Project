import React, { useState } from "react";
import {
  FaVoteYea,
  FaEdit,
  FaTrash,
  FaEye,
  FaInfoCircle,
  FaTimes,
} from "react-icons/fa";
import CandidateA4Sheet from "./CandidateA4Sheet";

const CandidateCard = ({ candidate }) => {
  const [showModal, setShowModal] = useState(false);
  console.log(candidate.image_of_Candidate);

  return (
    <>
      {/* Candidate Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-2xl transition w-[380px]">
  {/* Candidate Header */}
  <div className="flex items-center gap-6">
    <img
      src={candidate.image_of_Candidate || "https://via.placeholder.com/100"}
      alt={candidate.name.firstName}
      className="w-20 h-20 rounded-full object-cover border-2"
    />
    <div>
      <h3 className="text-xl font-bold text-gray-800">
        {candidate.name.firstName} {candidate.name.lastName}
      </h3>
      <p className="text-base text-gray-600">
        {candidate.role_for_Election}
      </p>
      <p className="text-base font-semibold text-blue-600 flex items-center gap-2">
        <span>{candidate.party.partyName}</span>
        <img
          src={candidate.party.symbol}
          className="h-10 w-10 object-contain"
          alt=""
        />
      </p>
      <p className="text-sm text-gray-500">
        {candidate.constituency.village}, {candidate.constituency.district}
      </p>
    </div>
  </div>

  {/* Action Buttons (Role Based) */}
  <div className="flex flex-wrap gap-3 mt-5">
    {/* USER ROLE */}
    {candidate.role === "user" && (
      <>
        <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white text-base rounded-lg hover:bg-green-600">
          <FaVoteYea /> Vote
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-base rounded-lg hover:bg-blue-600"
        >
          <FaInfoCircle /> Read More
        </button>
      </>
    )}

    {/* CANDIDATE ROLE */}
    {candidate.role === "candidate" && (
      <>
        <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white text-base rounded-lg hover:bg-green-600">
          <FaVoteYea /> Vote
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-base rounded-lg hover:bg-blue-600"
        >
          <FaInfoCircle /> Read More
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white text-base rounded-lg hover:bg-yellow-600">
          <FaEdit /> Edit Request
        </button>
      </>
    )}

    {/* ADMIN ROLE */}
    {candidate.role === "admin" && (
      <>
        <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white text-base rounded-lg hover:bg-green-600">
          <FaVoteYea /> Vote
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-base rounded-lg hover:bg-blue-600"
        >
          <FaEye /> View
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white text-base rounded-lg hover:bg-yellow-600">
          <FaEdit /> Edit
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white text-base rounded-lg hover:bg-red-600">
          <FaTrash /> Delete
        </button>
      </>
    )}
  </div>
</div>


      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900/60 flex justify-center items-center z-50">
          <div className="relative w-[90%] h-full rounded-lg shadow-lg p-6 overflow-y-auto overflow-x-hidden bg-white">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-2xl"
            >
              <FaTimes />
            </button>

            <CandidateA4Sheet candidate={candidate} />
          </div>
        </div>
      )}
    </>
  );
};

export default CandidateCard;
