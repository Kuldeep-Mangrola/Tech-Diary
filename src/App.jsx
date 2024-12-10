import React from 'react';
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import MyCarousel from './Componets/Carousel/MyCarousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Machinery from './Componets/Machinery/Machinery';
import Profile from './Componets/UserProfile/Profile';
import StartEntery from './Componets/StartEntery/StartEntery';
import Welcome from './Componets/Login/Welcome';
import PaymentTracking from './Componets/PaymentTracking/PaymentTracking';


function App() {
  return (
    <>
        <Navbar/>
        <MyCarousel/>
        <Machinery/>
        <StartEntery/>
        <Profile/>
        <PaymentTracking/>
        <Welcome/>
    </>
  );
}

export default App;

