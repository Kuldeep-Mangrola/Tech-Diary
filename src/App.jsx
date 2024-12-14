import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Componets/Navbar/Navbar";
import Home from "./Componets/Home/Home";
import Welcome from "./Componets/Login/Welcome";
import Machinery from "./Componets/Machinery/Machinery";
import PaymentTracking from "./Componets/PaymentTracking/PaymentTracking";
import Profile from "./Componets/UserProfile/Profile";
import StartEntry from "./Componets/StartEntery/StartEntery";
import ScrollTop from "./Componets/ScrollToTop/ScrollTop";
import Contact from "./Componets/Contact/Contact";
import AboutUs from './Componets/About/AboutUs'
import "bootstrap/dist/css/bootstrap.css";
// import Invoice from './Componets/Invoice/Invoice';
import MachineRegistration from "./Componets/MachineRegistration/MachineRegistration";
import UpdateMachinery from "./Componets/Machinery_Update/UpdateMachinery";
import MachineMaintenanceApp from "./Componets/Machine_Mantainanec/MachineMaintan";
import Billing from "./Componets/Feature/Billing";
import Invoice from "./Componets/Invoice/Invoice";


function App() {
  return (
    <Router>
      <ScrollTop />
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Welcome />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/insta" element={<AboutUs />} />
          <Route path="/facebook" element={<AboutUs />} />
          <Route path="/github" element={<AboutUs />} />
          <Route path="/linkedin" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bill-history" element={<Billing />} />
          <Route path="/payment-tracking" element={<PaymentTracking />} />
          <Route path="/machinery" element={<Machinery />} />
          <Route path="/start-entry" element={<StartEntry />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/add-machinery" element={<MachineRegistration />} />
          <Route path="/machine-maintenance" element={<MachineMaintenanceApp/>} />
          <Route path="/machinery-update" element={<UpdateMachinery/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
