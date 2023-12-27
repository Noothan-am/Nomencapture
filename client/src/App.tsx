import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "./index.css";
import Home from "./pages/Home";
import Forms from "./pages/Forms";
import NamingSet from "./pages/NamingSet";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NamingSet />} />
      <Route path="/login" element={<Login />} />
      <Route path="/form" element={<Forms />} />
      <Route element={<ProtectedRoutes auth={false} />}>
        <Route element={<Home />} path="/home" />
      </Route>
    </Routes>
  );
}

export default App;
