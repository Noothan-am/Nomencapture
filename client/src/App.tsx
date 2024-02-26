import { Route, Routes } from "react-router-dom";
import { ClientProtectedRoutes, AdminProtectedRoutes } from "./ProtectedRoutes";
import AudioPage from "./pages/AudioPage";
import AuditPage from "./pages/AuditPage";
import FinalGreetings from "./pages/FinalGreetings";
import Forms from "./pages/Forms";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NamingSet from "./pages/NamingSet";
import Review from "./pages/Review";
import SecondRoundGreetings from "./pages/SecondRoundGreetings";
import SecondRoundNomen from "./pages/SecondRoundNomen";
import SecondRoundReview from "./pages/SecondRoundReview";
import Thankyou from "./pages/Thankyou";
import YourName from "./pages/YourName";

import "./index.css";
import Admin from "./admin/pages/Admin";
import Name from "./admin/pages/Name";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route element={<AdminProtectedRoutes />}>
        <Route path="/admin/home" element={<Admin />} />
        <Route path="/admin/name/:name" element={<Name />} />
      </Route>
      <Route element={<ClientProtectedRoutes />}>
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/form" element={<Forms />} />
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
