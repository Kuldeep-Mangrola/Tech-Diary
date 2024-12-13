import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import MyCarousel from "../Carousel/MyCarousel";
import Feature from "../Feature/Feature";
import Machinery from "../Machinery/Machinery";
import StartEntery from "../StartEntery/StartEntery";
import PaymentTracking from "../PaymentTracking/PaymentTracking";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <MyCarousel />
      <Feature />
      <Machinery />
      <Footer/>
    </div>
  );
}

export default Home;