const Candidates = [
  {
    _id: "66d120a5b9d2f1a3b4e50002",
    role_for_Election: "Member of Parliament (Prime Minister)",
    role: "admin", // roles: "user", "candidate", "admin"
    email: "pm@india.gov.in",
    password: "", // usually should be hashed
    image_of_Candidate: "/candidateImage.jpeg", // replace with actual image path
    name: {
      firstName: "Narendra",
      lastName: "Modi",
    },
    party: {
      _id: "66d120a5b9d2f1a3b4e5p002",
      partyName: "Bharatiya Janata Party (BJP)",
      symbol: "/bjp-7288.png",
    },
    age: 74,
    gender: "Male",
    education: "M.A. in Political Science",
    experience: "Over 20 years as CM of Gujarat and Prime Minister of India",
    voterId:"DEAST2045",

    manifesto: [
      "Make India a $5 trillion economy",
      "Strengthen national security and defense",
      "Digital India – technology for every citizen",
      "Self-reliant India (Atmanirbhar Bharat)",
      "Improve infrastructure, railways, and highways",
    ],
    contact: {
      email: "pm@india.gov.in",
      phone: "+91-1111111111",
    },
    constituency: {
      _id: "66d120a5b9d2f1a3b4e5c002",
      code: "UP-80", 
      constituencyName: "Varanasi",
      village: "Varanasi",
      district: "Varanasi",
      state: "Uttar Pradesh",
      type: "Parliamentary", // or "Assembly"
    },
    applicationStatus: "Verified", // Pending / Verified / Rejected
    votes: [],
    totalVotes: 0,
    status: "Active", // Active / Inactive
  },
];

export default Candidates;
