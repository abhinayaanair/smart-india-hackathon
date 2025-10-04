import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hero from "./pages/Hero";
// import SignUp from "./pages/Login";
import SecurityDashboard from "./pages/SecurityDashboard";
import Target from "./pages/Target";
import Tools from "./pages/Tools";
import Configure from "./pages/Configure";
import Review from "./pages/Review";
import LiveScanMonitor from "./pages/LiveScan";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Hero />} />
        <Route path="/security" element={<SecurityDashboard />} />
        <Route path="/target" element={<Target />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/configure" element={<Configure />} />
        <Route path="/review" element={<Review />} />
        <Route path="/liveScan" element={<LiveScanMonitor />} />
      </Routes>
    </Router>
  );
};

export default App;
