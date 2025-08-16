import CandidateCard from "../components/CandidateCard";
import Candidates from "../data/CandidateData";

const CandidateListCards = ({ isAdmin = true
 }) => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Candidate List</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Candidates.map((candidate) => (
          <CandidateCard
            key={candidate._id}
            candidate={candidate}
            isAdmin={isAdmin}
          />
        ))}
      </div>
    </div>
  );
};

export default CandidateListCards;