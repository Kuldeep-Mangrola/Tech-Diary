import React from "react";
import Navbar from "../Navbar/Navbar";
import MyCarousel from "../Carousel/MyCarousel";
import Feature from "../Feature/Feature";
import Machinery from "../Machinery/Machinery";

function Home() {
  return (
    <>
      <Navbar />
      <MyCarousel />
      <Feature />
      <Machinery />
    </>
  );
}

export default Home;
