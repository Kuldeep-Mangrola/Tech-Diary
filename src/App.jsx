import React from "react";
import "./App.css";
import Navbar from "./Componets/Navbar/Navbar";
import MyCarousel from "./Componets/Carousel/MyCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Machinery from "./Componets/Machinery/Machinery";
import Profile from "./Componets/UserProfile/Profile";
import StartEntery from "./Componets/StartEntery/StartEntery";
import Welcome from "./Componets/Login/Welcome";
import PaymentTracking from "./Componets/PaymentTracking/PaymentTracking";
import Feature from "./Componets/Feature/Feature";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Componets/Home/Home";
import StartEntry from "./Componets/StartEntery/StartEntery";


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bill-history" element={
            <StartEntery />
            } />
          <Route path="/Payment-Tracking" element={<PaymentTracking />} />
          <Route path="/add-machinery" element={<Machinery />} />
          <Route path="/StartMachinary" element={ <StartEntry/>}/>
          <Route path="/machine-maintenance" element={<Machinery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
