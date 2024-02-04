import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Forms from "./pages/Forms";
import AuditPage from "./pages/AuditPage";
import AudioPage from "./pages/AudioPage";
import NamingSet from "./pages/NamingSet";
import ProtectedRoutes from "./ProtectedRoutes";
import Review from "./pages/Review";
import YourName from "./pages/YourName";
import FinalGreetings from "./pages/FinalGreetings";
import Nomen from "./pages/Nomen";
import SecondRoundNomen from "./pages/SecondRoundNomen";
import Thankyou from "./pages/Thankyou";
import SecondRoundReview from "./pages/SecondRoundReview";
import SecondRoundGreetings from "./pages/SecondRoundGreetings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/form" element={<Forms />} />
      <Route path="/thankyou" element={<Thankyou />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route path="/understanding" element={<AuditPage />} />
        <Route path="/naming-set" element={<NamingSet />} />
        <Route path="/review" element={<Review />} />
        <Route path="/final-name/:name" element={<YourName />} />
        <Route path="/audio-page" element={<AudioPage />} />
        <Route path="/final-greeting" element={<FinalGreetings />} />
        <Route path="/second-round" element={<SecondRoundNomen />} />
        <Route path="/second-round-review" element={<SecondRoundReview />} />
        <Route
          path="/second-round-thankyou"
          element={<SecondRoundGreetings />}
        />
      </Route>
    </Routes>
  );
}

export default App;
