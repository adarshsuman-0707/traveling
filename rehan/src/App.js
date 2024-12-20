import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login/Login';
import MoreAbout from './Component/Packege/MoreAbout/MoreAbout';
import About from './Component/Aboutus/About';
import HolidayTurky from './Component/HolidayPakege/HolidayAll/HolidayTurky/HolidayTurky';
import HolidayDubai from './Component/HolidayPakege/HolidayAll/HolidayDubai/HolidayDubai';
import HolidyShrilanka from './Component/HolidayPakege/HolidayAll/HolidayShrilanka/HolidyShrilanka';
import HolidayIraq from './Component/HolidayPakege/HolidayAll/HolidayIraq/HolidayIraq';
import HolidayMaleshiya from './Component/HolidayPakege/HolidayAll/HolidayMaleshiya/HolidayMaleshiya';
import HolidayLondon from './Component/HolidayPakege/HolidayAll/London/HolidayLondon';
import HolidaySingapur from './Component/HolidayPakege/HolidayAll/Singapur/HolidaySingapur';
import HolidayEgypt from './Component/HolidayPakege/HolidayAll/Egypt.js/HolidayEgypt';
import Gallery from './pages/Gallery/Gallery';  // Import the Gallery page
import Signup from './Signup/Signup';
import B2BSignup from './Signup/B2BSignup';
import Dashboard from './Component/accountdashboard/Dashboard';
import Hajjfinalform from './Component/tripform/Hajjfinalform';
import Popup from './Popup';  // Import the Popup component
import AllServices from "./Component/Overservice/AllServices"

function App() {
  const [showPopup, setShowPopup] = useState(true);  // State to control popup visibility

  const refs = {
    packageRef: useRef(null),
    holidayRef: useRef(null),
    domesticRef: useRef(null),
    serviceRef: useRef(null),
    contactRef: useRef(null),
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <Router>
        {/* Pass refs to Navbar */}
        <Navbar scrollRefs={refs} />
        <Routes >
          {/* Home Page with Scrollable Sections */}
          <Route path="/" element={<Home refs={refs} />} />

          {/* Individual Pages */}
          <Route path="/moreabout" element={<MoreAbout />} />
          <Route path="/turky" element={<HolidayTurky />} />
          <Route path="/Dubai" element={<HolidayDubai />} />
          <Route path="/Shirilanka" element={<HolidyShrilanka />} />
          <Route path="/Iraq" element={<HolidayIraq />} />
          <Route path="/Maleshiya" element={<HolidayMaleshiya />} />
          <Route path="/London" element={<HolidayLondon />} />
          <Route path="/Singapur" element={<HolidaySingapur />} />
          <Route path="/Egypt" element={<HolidayEgypt />} />

          {/* Gallery Page */}
          <Route path="/Gallery" element={<Gallery />} />

          {/* Other Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Account" element={<Dashboard />} />
          <Route path="/B2BSignup" element={<B2BSignup />} />
          <Route path="/Hajjfinalform" element={<Hajjfinalform />} />

          <Route path="/AllServices" element={<AllServices />} />
        </Routes>

        {/* Display the popup if showPopup is true */}
        {showPopup && <Popup onClose={closePopup} />}

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
