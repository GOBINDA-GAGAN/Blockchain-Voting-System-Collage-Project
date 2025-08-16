import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layouts";
import Dashboard from "./pages/Dashboard";
import CandidateList from "./pages/CandidatesList";
import Candidates from "./data/CandidateData";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LandingPage from "./pages/LandingPage";

function App() {
  const role = Candidates[0].role;

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected / Layout Routes */}
        <Route element={<Layout userRole={role} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/candidates" element={<CandidateList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
