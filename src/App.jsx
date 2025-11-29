import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import Certificates from "./pages/Certificates";
import Highlights from "./pages/Highlights";
import Feedback from "./pages/Feedback";
import Profile from "./pages/profile";
import Register from "./pages/Register";   // ✅ added

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/profile" element={<Profile />} />

        {/* ⭐ NEW ROUTE FOR REGISTER PAGE */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
