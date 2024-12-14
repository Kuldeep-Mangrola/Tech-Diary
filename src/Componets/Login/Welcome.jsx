import React, { useState } from "react";
import { assets } from "../../assets/image/assest";
import { Link } from "react-router-dom";

import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { FaUser, FaEnvelope, FaPhone, FaLock, FaBuilding, FaImage } from "react-icons/fa";

const Welcome = () => {
  const [view, setView] = useState("welcome"); // State to manage what to display

  const handleCreateAccountClick = () => setView("createAccount");
  const handleLoginClick = () => setView("login");

  return (
    <div
      className="relative flex justify-center items-center h-screen w-full bg-cover bg-center bg-yellow-400"
      style={{
        backgroundImage: `url(${assets.Machinery})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for dimming the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content inside */}
      <div className="relative flex flex-col justify-start items-center w-11/12 max-w-md p-6 rounded-2xl bg-gray-700 text-white shadow-xl">
        {/* Conditional Rendering */}
        {view === "welcome" && (
          <section className="relative flex flex-col items-center z-10 mt-10">
            {/* Welcome Message */}
            <h1 className="text-2xl font-semibold mt-10">WELCOME!</h1>

            {/* Buttons */}
            <div className="flex flex-col gap-6 mt-6 w-full">
              <button
                onClick={handleCreateAccountClick}
                className="rounded-full bg-yellow-400 border border-white text-gray-800 font-bold py-2 w-full hover:bg-gray-800 hover:text-white transition-all"
              >
                Create Account
              </button>
              <button
                onClick={handleLoginClick}
                className="rounded-full bg-yellow-400 border-2 border-white text-gray-800 font-bold py-2 w-full hover:bg-gray-800 hover:text-white transition-all"
              >
                Login
              </button>
            </div>

            {/* Social Icons */}
            <h2 className="flex flex-col justify-center align-center items-center font-light p-0 mt-10 mb-0 h-1 text-[20px]">follow us here</h2>
            <div className="flex gap-6 mt-6 text-2xl text-yellow-400">
              <Link to={"/insta"}>
                <FaInstagram className="hover:text-gray-800 transition-all text-yellow-400" />
              </Link>

              <Link to={"/facebook"}>
                <FaFacebook className="hover:text-gray-800 transition-all text-yellow-400" />
              </Link>

              <Link to={"/github"}>
                <FaGithub className="hover:text-gray-800 transition-all text-yellow-400" />
              </Link>

              <Link to={"/linkedin"}>
                <FaLinkedin className="hover:text-gray-800 transition-all text-yellow-400" />
              </Link>
            </div>
          </section>
        )}

        {view === "createAccount" && (
          <section className="relative flex flex-col items-center z-10 mt-10">
            <h1 className="text-2xl font-semibold">Create Account</h1>
            <form className="flex flex-col gap-4 mt-6 w-full max-w-sm justify-center items-center">
              {/* Full Name */}
              <div className="flex items-center gap-2">
                <label htmlFor="Full_Name" className="text-yellow-400 text-xl">
                  <FaUser />
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  id="Full_Name"
                  required
                  className="flex-1 rounded-md p-2 border-2 border-yellow-400 bg-gray-800 text-yellow-400"
                />
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <label htmlFor="Email" className="text-yellow-400 text-xl">
                  <FaEnvelope />
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  id="Email"
                  required
                  className="flex-1 rounded-md p-2 border-2 border-yellow-400 bg-gray-800 text-yellow-400"
                />
              </div>

              {/* Mobile Number */}
              <div className="flex items-center gap-2">
                <label htmlFor="Number" className="text-yellow-400 text-xl">
                  <FaPhone />
                </label>
                <input
                  type="tel"
                  maxLength={10}
                  pattern="\d{10}"
                  placeholder="Mobile Number"
                  id="Number"
                  required
                  className="flex-1 rounded-md p-2 border-2 border-yellow-400 bg-gray-800 text-yellow-400"
                />
              </div>

              {/* Password */}
              <div className="flex items-center gap-2">
                <label htmlFor="Password" className="text-yellow-400 text-xl">
                  <FaLock />
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  id="Password"
                  required
                  className="flex-1 rounded-md p-2 border-2 border-yellow-400 bg-gray-800 text-yellow-400"
                />
              </div>

              {/* Company Name */}
              <div className="flex items-center gap-2">
                <label htmlFor="Company_Name" className="text-yellow-400 text-xl">
                  <FaBuilding />
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  id="Company_Name"
                  required
                  className="flex-1 rounded-md p-2 border-2 border-yellow-400 bg-gray-800 text-yellow-400"
                />
              </div>

              {/* Image Upload */}
              <div className="flex items-center gap-2">
                <label htmlFor="Photo" className="text-yellow-400 text-xl">
                  <FaImage />
                </label>
                <input
                  type="file"
                  placeholder="image"
                  accept="image/*"
                  id="Photo"
                  required
                  className="flex-1 rounded-md p-2 border-2 border-yellow-400 bg-gray-800 text-yellow-400 "
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-yellow-500 text-gray-800 font-bold py-2 w-full hover:bg-yellow-400 transition-all"
              >
                Sign Up
              </button>
            </form>
            <button
              onClick={() => setView("welcome")}
              className="mt-4 text-yellow-400 underline hover:text-gray-800"
            >
              Back to Welcome
            </button>
          </section>
        )}

        {view === "login" && (
          <section className="relative flex flex-col items-center z-10 mt-10">
            <h1 className="text-2xl font-semibold">Login</h1>
            <form className="flex flex-col gap-4 mt-6 w-full max-w-sm">
              <input
                type="email"
                placeholder="Email"
                required
                id="email"
                className="rounded-md p-2 border-2 border-yellow-400 bg-gray-800 text-yellow-400"
              />
              <input
                type="password"
                placeholder="Password"
                id="password"
                required
                className="rounded-md p-2 border-2 border-yellow-400 bg-gray-800 text-yellow-400"
              />
              <button
                type="submit"
                className="rounded-full bg-yellow-500 text-gray-800 font-bold py-2 w-full hover:bg-yellow-400 transition-all"
              >
                Login
              </button>
            </form>
            <button
              onClick={() => setView("welcome")}
              className="mt-4 text-yellow-400 underline hover:text-gray-800"
            >
              Back to Welcome
            </button>
          </section>
        )}
      </div>
    </div>
  );
};

export default Welcome;
