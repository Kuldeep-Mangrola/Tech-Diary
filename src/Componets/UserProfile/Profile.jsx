import React from 'react';
import { FaUserCircle, FaCamera, FaPencilAlt, FaSignOutAlt, FaCog } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto p-6">

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-10 p-8 bg-gray-800 rounded-xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
  
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="border-4 border-yellow-500 rounded-full p-6 mb-4"
            >
              <FaUserCircle className="text-6xl text-gray-400" />
            </motion.div>

            <motion.h1
              className="text-3xl font-bold"
              whileHover={{ scale: 1.1 }}
            >
              Aman Rathod
            </motion.h1>
            <p className="text-lg text-gray-400">7658974656</p>
            <p className="text-sm text-gray-500">AmanRathor@gmail.com</p>

      
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="p-2 mt-4 rounded-full cursor-pointer bg-gray-700 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900"
            >
              <FaCamera className="text-xl" />
            </motion.div>
          </div>

      
          <div className="flex flex-col justify-center text-center mt-8 md:mt-0 space-y-6">
            <div className="flex flex-col items-center bg-gray-800 py-4 px-8 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">Account Information</h2>
              <p className="text-gray-500 text-sm">Member since January 2020</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-500 text-gray-900 py-2 px-8 rounded-lg font-semibold mt-6"
            >
              Edit Profile
            </motion.button>
          </div>
        </motion.div>

  
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Link to={"/Machinery-Update"}  className="bg-yellow-500 text-gray-900  px-6 rounded-lg flex items-center justify-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-500 text-gray-900  px-6 rounded-lg flex items-center justify-center gap-3"
          >
            <FaPencilAlt className="text-xl" />
            Update Machinery
          </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg flex items-center justify-center gap-3"
          >
            <FaCog className="text-xl" />
            Settings
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg flex items-center justify-center gap-3"
          >
            <FaSignOutAlt className="text-xl" />
            Logout
          </motion.button>
        </motion.div>


        <footer className="text-center text-gray-400 mb-6">
          <p>&copy; 2024 Aman Rathod. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Profile;
