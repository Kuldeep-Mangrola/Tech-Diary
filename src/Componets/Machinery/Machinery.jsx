import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { machine } from "../../assets/image/assest";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Machinery() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/start-entry");
  };

  return (
    <div className="bg-gray-900 py-12">
      <h2 className="text-center text-yellow-400 text-4xl font-extrabold mb-10">
        Explore Our Machines
      </h2>

      <div className="overflow-x-auto overflow-y-hidden py-6 h-full scrollbar-hide">
        <div className="flex space-x-8 px-6">
          {machine.map((item) => (
            <motion.div
              key={item.id}
              className="flex-shrink-0 bg-gray-800 text-white rounded-lg shadow-lg"
              style={{ width: "18rem" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                className="h-48 w-full object-cover rounded-t-lg"
                src={item.image}
                alt={`Machine ${item.id}`}
              />
              <div className="p-4">
                <h5 className="text-xl font-semibold text-yellow-400 flex justify-center items-start">
                  {item.name || `Machine ${item.id}`}
                </h5>
                <button
                  onClick={handleButtonClick}
                  className="w-full bg-yellow-500 text-gray-800 py-2 rounded-md font-semibold hover:bg-yellow-400 transition-all"
                >
                  Start
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Machinery;
