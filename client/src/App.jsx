import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Layout from "./components/Layouts/Layouts";

import Dashboard from "./pages/Dashboard";
import CandidateList from "./pages/CandidatesList";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LandingPage from "./pages/LandingPage";
import UserManagement from "./pages/UserManagement";
import ManageElection from "./pages/ManageElection";
import CastVote from "./pages/CastVote";
import Profile from "./pages/UserProfileCard";
import CollegeElectionResults from "./pages/CollegeElectionResults";
import Announcements from "./pages/Announcement";
import UserProfileCard from "./pages/UserProfileCard";

function App() {
  const { user } = useContext(AuthContext);
  const role = user?.role || "user"; 
  
  
  return (
      <Routes>
        {/* Public */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected */}
        <Route element={<Layout userRole={role} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/candidates" element={<CandidateList />} />
          <Route path="/vote" element={<CastVote />} />
          <Route path="/my-profile" element={<UserProfileCard/>} />
          <Route path="/announcements" element={<Announcements/>} />
          <Route path="/results" element={<CollegeElectionResults />} />

          {/* Only Admin can access */}
          {role === "admin" && (
            <>
              <Route path="/users" element={<UserManagement />} />
              <Route path="/results" element={<CollegeElectionResults />} />
              <Route path="/manage-election" element={<ManageElection />} />
            </>
          )}
        </Route>
      </Routes>
  );
}

export default App;
