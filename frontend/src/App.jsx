import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Navbar from "./components/Navbar";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/" element={<Dashboard />} /> */}
          {/* <Route path="/" element={<Navbar />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
