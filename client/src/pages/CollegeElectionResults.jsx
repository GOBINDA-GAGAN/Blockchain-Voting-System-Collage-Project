import React from "react";
import { motion } from "framer-motion";

const CollegeElectionResultsMotion = () => {
  const winners = [
    {
      id: 1,
      name: "Riya Sharma",
      position: "President",
      party: "Campus Unity",
      votes: 540,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Arjun Singh",
      position: "Vice President",
      party: "Youth First",
      votes: 480,
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      id: 3,
      name: "Neha Patel",
      position: "Secretary",
      party: "Green Campus",
      votes: 420,
      image: "https://randomuser.me/api/portraits/women/47.jpg",
    },
  ];

  const maxVotes = Math.max(...winners.map((c) => c.votes));

  const cardVariants = {
    hidden: { y: 200, opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, delay: custom * 0.3 },
    }),
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-10">
        🏫 College Election Final Results
      </h1>

      <div className="flex items-end gap-8">
        {/* Vice President - left */}
        <motion.div
          className="flex flex-col items-center"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-36 h-48 rounded-xl overflow-hidden shadow-lg relative">
            <img
              src={winners[1].image}
              alt={winners[1].name}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 left-2 bg-yellow-400 text-white px-2 py-1 rounded-full text-xs font-semibold">
              {winners[1].position}
            </span>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-lg font-semibold">{winners[1].name}</h3>
            <p className="text-gray-500">{winners[1].party}</p>
            <motion.div
              className="w-32 h-4 bg-gray-300 rounded-full mt-2 overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: `${(winners[1].votes / maxVotes) * 100}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="h-full bg-blue-500 rounded-full"></div>
            </motion.div>
            <p className="text-yellow-600 font-medium mt-1">{winners[1].votes} votes</p>
          </div>
        </motion.div>

        {/* President - middle */}
        <motion.div
          className="flex flex-col items-center -mb-10"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-52 h-64 rounded-xl overflow-hidden shadow-2xl border-4 border-green-500 relative">
            <img
              src={winners[0].image}
              alt={winners[0].name}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {winners[0].position}
            </span>
          </div>
          <div className="text-center mt-3">
            <h2 className="text-2xl md:text-3xl font-bold text-green-600">
              {winners[0].name}
            </h2>
            <p className="text-gray-500">{winners[0].party}</p>
            <motion.div
              className="w-40 h-5 bg-gray-300 rounded-full mt-2 overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: `${(winners[0].votes / maxVotes) * 100}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="h-full bg-green-500 rounded-full"></div>
            </motion.div>
            <p className="text-yellow-600 font-semibold mt-1">{winners[0].votes} votes</p>
          </div>
        </motion.div>

        {/* Secretary - right */}
        <motion.div
          className="flex flex-col items-center"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-32 h-44 rounded-xl overflow-hidden shadow-lg relative">
            <img
              src={winners[2].image}
              alt={winners[2].name}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 left-2 bg-red-400 text-white px-2 py-1 rounded-full text-xs font-semibold">
              {winners[2].position}
            </span>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-lg font-semibold">{winners[2].name}</h3>
            <p className="text-gray-500">{winners[2].party}</p>
            <motion.div
              className="w-28 h-4 bg-gray-300 rounded-full mt-2 overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: `${(winners[2].votes / maxVotes) * 100}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="h-full bg-red-500 rounded-full"></div>
            </motion.div>
            <p className="text-yellow-600 font-medium mt-1">{winners[2].votes} votes</p>
          </div>
        </motion.div>
      </div>

      {/* Podium Base */}
      <div className="flex justify-center mt-6 gap-10">
        <div className="w-36 h-4 bg-gray-400 rounded-t-md"></div>
        <div className="w-52 h-6 bg-gray-400 rounded-t-md"></div>
        <div className="w-32 h-3 bg-gray-400 rounded-t-md"></div>
      </div>
    </div>
  );
};

export default CollegeElectionResultsMotion;
