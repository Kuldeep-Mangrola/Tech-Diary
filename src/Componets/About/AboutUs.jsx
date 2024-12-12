import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl w-full bg-gray-800 text-white p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
    
        <h1 className="text-4xl font-extrabold text-yellow-400 text-center mb-8">
          About Us
        </h1>

        <div className="text-center mb-10">
          <h2 className="text-xl font-semibold text-gray-300">
            Welcome to Tech Diary
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            At Tech Diary, we're dedicated to revolutionizing the way you manage your machinery rentals. Whether you're a large enterprise or a small business, we provide easy-to-use and efficient tools to help you track, manage, and optimize your rental processes.
          </p>
        </div>

        <div className="bg-gray-700 rounded-lg p-8 mb-8">
          <h3 className="text-2xl text-yellow-400 font-semibold text-center mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-gray-300 text-center">
            Our mission is to simplify machinery rental operations, enhance transparency, and help businesses grow by providing a seamless digital platform for managing equipment rentals.
          </p>
        </div>

        <div className="bg-gray-700 rounded-lg p-8 mb-8">
          <h3 className="text-2xl text-yellow-400 font-semibold text-center mb-4">
            Our Vision
          </h3>
          <p className="text-lg text-gray-300 text-center">
            We envision a world where every business, no matter the size, can effortlessly track their machinery rentals and make data-driven decisions to maximize efficiency and profit.
          </p>
        </div>

        <div>
          <h3 className="text-2xl text-yellow-400 font-semibold text-center mb-6">
            Meet the Team
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-700 text-center p-6 rounded-lg w-64">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl text-yellow-400">Aman Rathod</h4>
              <p className="text-sm text-gray-300">CEO & Founder</p>
            </div>

            <div className="bg-gray-700 text-center p-6 rounded-lg w-64">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl text-yellow-400">Kuldee Mangrola</h4>
              <p className="text-sm text-gray-300">Co-Founder & CTO</p>
            </div>

            <div className="bg-gray-700 text-center p-6 rounded-lg w-64">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl text-yellow-400">Chat-GPT</h4>
              <p className="text-sm text-gray-300">Lead Developer</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-sm text-gray-400">
            &copy; 2024 Tech Diary. All rights reserved.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
