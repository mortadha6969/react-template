import React from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import WebsiteFooter from "./components/WebsiteFooter/WebsiteFooter.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Interfaces/Home/Home";
import RegisterPage from "./Interfaces/RegisterPage/RegisterPage.js";
import LoginPage from "./Interfaces/LoginPage/LoginPage";
import ProfileAccountPage from "./Interfaces/ProfileAccountPage/ProfileAccountPage.js";


function App() {
  return (
    <div className="App-Container">
      <Router>
        <Navbar />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/Register" element={<RegisterPage />} />
        </Routes>
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
        <Routes>
          <Route path="/ProfileAccountPage" element={<ProfileAccountPage />} />
        </Routes>
        </main>
        <WebsiteFooter />
      </Router>
    </div>
  );
}

export default App;
