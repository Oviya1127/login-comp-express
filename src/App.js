import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/admin_dashboard" element={<AdminDashboard />} />
        <Route path="/user_dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
