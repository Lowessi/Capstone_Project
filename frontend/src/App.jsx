import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import Navbar from "./components/Navbar";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  const token = localStorage.getItem("token");

  if (token) {
    console.log("✅ Token still exists:", token);
  } else {
    console.log("🚫 No token found — user is logged out");
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/" element={<Navbar />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
