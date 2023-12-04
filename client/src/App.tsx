import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "./index.css";
import Home from "./pages/Home";
import Forms from "./pages/Forms";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/form" element={<Forms />} />
    </Routes>
  );
}

export default App;
