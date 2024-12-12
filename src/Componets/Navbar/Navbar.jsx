import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-gradient-to-r from-gray-700 to-yellow-400 fixed top-0 m-0 w-full z-50 h-16 shadow-lg backdrop-blur-md">
      <div className="flex justify-between items-center px-6 h-14 text-white">
      
        <div className="font-semibold text-4xl flex flex-row gap-4 items-center justify-center">
        <Link to="/profile">
        <FaUserCircle className="border-4 rounded-full border-yellow-400 p-1 transform transition-all duration-300 hover:scale-110  text-white"/>
          </Link>
         
          <h2 className="font-sans text-yellow-400 text-base sm:text-sm md:text-lg lg:text-xl tracking-wide pt-1">
            TECH DIARY
          </h2>
        </div>

  
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

      
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6 absolute lg:static top-14 left-0 w-full lg:w-auto bg-slate-500 lg:bg-transparent transform transition-all duration-300 pt-3`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 lg:space-y-0 space-y-4 px-5 lg:px-0 py-4 lg:py-0">
            <li>
              <Link
                to="/"
                className="block no-underline py-2 px-4 font-semibold text-gray-600 hover:text-white lg:hover:bg-transparent lg:hover:underline transition-all duration-300 transform hover:scale-110"
                onClick={closeMenu}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block no-underline py-2 px-4 font-semibold text-gray-600 hover:text-white lg:hover:bg-transparent lg:hover:underline transition-all duration-300 transform hover:scale-110"
                onClick={closeMenu}
              >
                CONTACT
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block no-underline py-2 px-4 font-semibold text-gray-600 hover:text-white lg:hover:bg-transparent lg:hover:underline transition-all duration-300 transform hover:scale-110"
                onClick={closeMenu}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block no-underline py-2 px-4 font-semibold text-gray-600 hover:text-white lg:hover:bg-transparent lg:hover:underline transition-all duration-300 transform hover:scale-110"
                onClick={closeMenu}
              >
                LOG IN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
