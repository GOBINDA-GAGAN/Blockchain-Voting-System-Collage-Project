import { useEffect, useState } from "react";

const ElectionResultsPartyWise = () => {
  const [votes, setVotes] = useState({
    BJD: 0,
    BJP: 0,
    Congress: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setVotes((prev) => {
        const incBJD = Math.floor(Math.random() * 50);
        const incBJP = Math.floor(Math.random() * 40);
        const incCon = Math.floor(Math.random() * 35);

        return {
          BJD: prev.BJD + incBJD,
          BJP: prev.BJP + incBJP,
          Congress: prev.Congress + incCon,
        };
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  const partyData = {
    BJD: { 
      color: "bg-green-100 border-green-500 text-green-700",
      img: "/bjp-7288.png"
    },
    BJP: { 
      color: "bg-orange-100 border-orange-500 text-orange-700",
      img: "/bjp-7288.png"
    },
    Congress: { 
      color: "bg-blue-100 border-blue-500 text-blue-700",
      img: "/bjp-7288.png"
    },
  };

  return (
    <div className="grid gap-6">
      {Object.keys(votes).map((party) => (
        <div
          key={party}
          className={`border-2 rounded-2xl shadow-lg p-6 flex items-center transition-all ${partyData[party].color}`}
        >
          <img src={partyData[party].img} alt={party} className="w-30 h-30 mr-4" />
          <div>
            <h2 className="text-xl font-bold">{party}</h2>
            <p className="text-lg">Total Votes: {votes[party]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ElectionResultsPartyWise;
