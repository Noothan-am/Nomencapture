import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "./index.css";
import Home from "./pages/Home";
import Forms from "./pages/Forms";
import AuditPage from "./pages/AuditPage";
import AudioPage from "./pages/AudioPage";
import NamingSet from "./pages/NamingSet";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/understanding" element={<AuditPage />} />
      <Route path="/audio-page" element={<AudioPage />} />
      <Route path="/naming-set" element={<NamingSet />} />
      <Route path="/login" element={<Login />} />
      <Route path="/form" element={<Forms />} />
      <Route element={<ProtectedRoutes auth={false} />}>
        <Route element={<Home />} path="/home" />
      </Route>
    </Routes>
  );
}

export default App;
