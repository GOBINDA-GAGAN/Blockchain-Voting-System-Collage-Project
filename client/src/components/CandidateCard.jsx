import React from "react";

const CandidateCard = ({ candidate, onEdit, onDelete }) => {
  console.log(candidate);
  
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <img
    src={
  candidate.image_of_Candidate
    ? `http://localhost:5000${candidate.image_of_Candidate}`
    : "https://via.placeholder.com/50"
}
          alt={candidate.name.firstName}
          className="h-20 w-20 rounded-full object-cover border shadow"
        />
        <div>
          <h2 className="text-xl font-bold">
            {candidate.name.firstName} {candidate.name.lastName}
          </h2>
          <p className="text-gray-500">{candidate.role_for_Election}</p>
          <p className="text-gray-500">{candidate.department}</p>
        </div>
      </div>

      <div className="text-gray-700">
        <p><strong>Email:</strong> {candidate.email}</p>
        <p><strong>Contact:</strong> {candidate.contact.phone} | {candidate.contact.email}</p>
        <p><strong>Year:</strong> {candidate.year}</p>
        <p><strong>Age:</strong> {candidate.age}</p>
        <p><strong>Gender:</strong> {candidate.gender}</p>
        <p><strong>Manifesto:</strong> {candidate.manifesto.join(", ")}</p>
        <p>
          <strong>Status:</strong>{" "}
          <span className={`px-2 py-1 rounded-full text-sm ${
            candidate.applicationStatus === "Verified"
              ? "bg-green-100 text-green-700"
              : candidate.applicationStatus === "Pending"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}>
            {candidate.applicationStatus}
          </span>
        </p>
        <p><strong>Total Votes:</strong> {candidate.totalVotes}</p>
        <p><strong>Account Status:</strong> {candidate.status}</p>
      </div>

      <div className="flex gap-4 mt-4">
        <button
          onClick={() => onEdit(candidate)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(candidate._id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CandidateCard;
