import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layouts";
import Dashboard from "./pages/Dashboard";
import CandidateList from "./pages/CandidatesList";
import Candidates from "./data/CandidateData";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  const role=Candidates[0].role;

  
  

  return (
    <Router>
      <Routes>

          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
      <Layout userRole={role}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/candidates" element={<CandidateList/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
