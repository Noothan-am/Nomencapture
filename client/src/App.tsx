import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "./index.css";
import Home from "./pages/Home";
import Forms from "./pages/Forms";
import AuditPage from "./pages/AuditPage";
import NamingSet from "./pages/NamingSet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NamingSet />} />
      <Route path="/1" element={<AuditPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/form" element={<Forms />} />
    </Routes>
  );
}

export default App;
