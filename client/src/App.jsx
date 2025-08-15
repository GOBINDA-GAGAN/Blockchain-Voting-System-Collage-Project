import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layouts";
import Dashboard from "./pages/Dashboard";

function App() {
  
  const role = "admin";

  return (
    <Router>
      <Layout userRole={role}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
